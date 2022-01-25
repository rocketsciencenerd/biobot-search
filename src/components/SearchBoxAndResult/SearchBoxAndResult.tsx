import React, {useState, useEffect, ChangeEvent, SyntheticEvent, KeyboardEvent, FC} from 'react';
import SearchResultsTable from '../SearchResultsTable/SearchResultsTable';
import {toast} from 'react-toastify';
import {ISearchResult} from '../../interfaces';
import {getTestKitShippingInfo, getShippingInfoByID} from '../../api/Api';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

import './search-box-and-result.css';


const SearchBoxAndResult: FC = () => {
  const [textInput, updateTextInput] = useState<string | null>('');
  const [kitData, updateKitData] = useState<ISearchResult[]>([]);
  const [selectedKits, updateSelectedKits] = useState<ISearchResult[]>([]);

  // This isn't ideal for large data sets but when this gets too large we could use
  // a service such as AWS ElastiSearch to autosuggest data
  useEffect(() => {
    getTestKitShippingInfo().then((response) => {
      updateKitData(response);
    })
  }, []);

  // use labelId string|null to get shipping info when item is selected from dropdown,
  // useState's updateTextInput() update isn't fast enough to reliably pass the textInput value,
  // When no value explicitly passed, use the textInput (which comes from key events)
  const handleSubmit = (labelId: string | null) => {
    const id = labelId ? labelId : textInput;
    getShippingInfoByID(id)
      .then((response) => {
        if (response && response.length > 0) {
          const found = selectedKits.some(el => el.label_id === response[0].label_id);
          if (!found) {
            toast.info('Test Kit Retrieved', {position: toast.POSITION.TOP_RIGHT});
            updateSelectedKits(selectedKits.concat(response));
          } else {
            toast.warn('Test Kit Already Retrieved', {position: toast.POSITION.TOP_RIGHT});
          }
        } else {
          toast.error(`No Test Kit Found. Kit ID ${textInput}`, {position: toast.POSITION.TOP_RIGHT});
        }
      })
      .catch(console.error);
  };

  const handleAutocompleteChange = (event: SyntheticEvent, value: string | null) => {
    updateTextInput(value);
    if (value) {
      handleSubmit(value);
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateTextInput(event.target.value);
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit(null);
    }
  }

  const clearSearchResults = () => updateSelectedKits([]);

  return (
    <div className='search-box-and-result'>
      <div className='search-box-container'>
        <button className='search-box-submit-btn' type='button' title='search' aria-label='search'
                onMouseDown={() => handleSubmit(null)}>
          <SearchIcon/>
        </button>
        <div className='autocomplete-container'>
          <Autocomplete
            className='search-box-input'
            freeSolo
            onKeyDown={handleKeyDown}
            onChange={handleAutocompleteChange}
            options={kitData.map((option) => option.label_id)}
            renderInput={(params) =>
              <TextField
                {...params}
                label='Label Id'
                variant='standard'
                onChange={handleInputChange}
              />
            }
          />
        </div>
      </div>
      {selectedKits.length > 0 ? (
        <div className='results-container'>
          <SearchResultsTable searchResults={selectedKits}/>
          <div className='results-button-container'>
            <Button className='clear-results-btn' variant='contained' onClick={clearSearchResults}>Clear
              Results</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SearchBoxAndResult;
