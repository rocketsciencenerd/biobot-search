# Welcome to Biobot Search
This demo was created as part of a the technical interview to become a full-stack developer at [Biobot Analytics](https://biobot.io/).

## Objective
Using JavaScript and React, your assignment is to create a Search for Kits functionality with 3 hours of effort. 

## Brief
Biobot customers receive a kit with tubes inside of it, which the customer uses to collect samples, and later sends the kit back to the Biobot lab. Your task is to build out search with an autocomplete functionality for our customers to use to track the shipping status of that kit. Each kit has a label on it with a unique kit identifier and FedEx tracking number. (See attached JSON file for the data)

## Tasks
- Create an endpoint that returns kits.
- Create a UI component that a user is able to type in the kit id and have information returned about it.
- Feel free to use Create React App
- There are 1,000 kits in our current database, but it keeps growing every day so build it for scale
## Notes
- Create a Github repository to turn this in
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- All Biobot-specific branded assets were retrieved directly from the [Biobot Analytics](https://biobot.io/) website.
- Create react app has many vulnerabilities in it's package. Since the create-react-app is not directly deployed to production, rather it generates a build file that is deployed to production, the create-react-app module was moved to devDependencies in the package.json file. Still, `npm audit --production` shows over 103 vulnerabilities (7 high, 1 critical) and whether that was acceptable risk and how to handle mitigation of risk would need to be discussed with the dev team for a production-ready app. 
- In thinking more about this, I thought of the searchBoxAndResult as one component that could be re-used throughout the app. I could have further broken down searchBoxAndResult into a component containing two componenets (instead of containing the one like it does now). The second component would consist of the search box, search-submit button, and all of the handler functions to go along with the autocomplete component. In other words, move lines 50-65 and 71-93 in the searchBoxAndResult component into it's own component like this, which goes along with SOLID Design Principles:

```
//@imports here 

// Note: Not typed for typescript but should be
const props = {handleSubmit, updateTextInput, handleInputChange, kitData};

const SearchBox: FC = (props) => {
  
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

 return (
   <div className='search-box-container'>
     <button className='search-box-submit-btn' type='button' title='search' aria-label='search' onMouseDown={() => handleSubmit(null)}>
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
 )
}
```

- Also, for production ready code, I would have added a few more tests for this new proposed component (SearchBox) and for the SearchResultsTable. 

## Repo Features
### CI/CD Workflow
[Github actions](https://github.com/features/actions) were chosen since they are free to use and the repo is hosted on github. 

### Linter
The linter chosen is [eslint](https://eslint.org/) because it came pre-installed with the create-react-app. The create-react-app [docs](https://create-react-app.dev/docs/setting-up-your-editor/) suggested extending the default eslint/prettier config to prevent hard-to-debug errors. See `.eslintrc.json` for an example of setting custom eslint rules. 

The eslint config in this repo makes `console.logs` in the code throw a warning, but ignores the `console.warn` and `console.error` functions.

### TypeScript
[TypeScipt](https://www.typescriptlang.org/) was chosen (while not required since React gives developers a choice to use TS or JS) to encourage maintainability and code consistency. 

Benefits of TypeScript:
 - Allows clear definition of PropTypes - prevents undefined errors
 - Forces developers into a specific code style
 - Integrates with editor to catch bugs before bad code is even committed
 - According to the [Association for Computing Machinery](https://dl.acm.org/), TypeScript has been shown to [reduce bugs by 15%](https://dl.acm.org/doi/abs/10.1145/2676726.2676971)

Drawbacks of TypeScript:
- Takes some time to learn
- May increase build time since code building needs to go through another layer of compilation
- Can be overly rigid for small projects 
- Some third party libraries may not have type definitions

TypeScript may not be suitable for all new React projects but is worth discussing in a dev team considering the value it adds in the prevention of bugs, improved ability to scale, and concise tracking of props through a React application.
 

### Material UI
Since there were no specific stylistic requirements outlined, [Material Ui](https://mui.com/) was added to the repo to build the application as quickly as possible. It provides pre-designed, customizable components allowing this product to be quickly shipped.  

### Animations
Animations adapted from [Animate.css](https://animate.style/)

### Code Style
- Single quotes vs double quotes for strings. According to the [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml): `Prefer ' over "`: "For consistency single-quotes (') are preferred to double-quotes ("). This is helpful when creating strings that include HTML"

## Available Scripts
#### `npm start`
Opens two terminal tabs, one for `npm run frontend`, one for `npm run backend`. On MacOS, terminal needs accessibility access and will prompt the user to allow the action. Otherwise, to run the app, open two terminals. In one terminal, run `npm run frontend` in another terminal run `npm run backend`.

#### `npm run frontend`
Runs the app in the development mode at [http://localhost:3000](http://localhost:3000).

#### `npm run backend`
Runs the backend using json-server at [http://localhost:4000](http://localhost:4000). To retrieve shipping data: [http://localhost:4000/shipping_data](http://localhost:4000/shipping_data).

#### `npm test`
Launches the test runner in the interactive watch mode. More about [running tests here](https://facebook.github.io/create-react-app/docs/running-tests).

#### `npm run build`
Builds the app for production to the `build` folder. Bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. [Deployment info here](https://facebook.github.io/create-react-app/docs/deployment).

#### `npm run lint`
Runs linter for the application.
