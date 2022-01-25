import React, {FC} from 'react';
import {ISearchResult} from '../../interfaces';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './search-results-table.css'


const SearchResultsTable: FC<{ searchResults: ISearchResult[] }> = ({searchResults}) => {
  return (
    <div className='search-results'>
      <TableContainer component={Paper}>
        <Table aria-label='search result table'>
          {/*Add caption for Accessibility*/}
          <caption>Table containing test kit shipping data, use the search bar above to search for your test kit</caption>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Label Id</TableCell>
              <TableCell align='center'>Shipping Tracking Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResults.map((row) => (
              <TableRow key={row.id}>
                <TableCell align='center'>{row.label_id}</TableCell>
                <TableCell align='center'>{row.shipping_tracking_code}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default SearchResultsTable;
