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

## Repo Features
### CI/CD Workflow
[Github actions](https://github.com/features/actions) were chosen since they are free to use and the repo is hosted on github. 

### Linter
The linter chosen is [prettier](https://github.com/prettier/prettier) because it came pre-installed with the create-react-app. The create-react-app [docs](https://create-react-app.dev/docs/setting-up-your-editor/) suggested extending the default prettier config to prevent hard-to-debug errors. 

### TypeScript
[TypeScipt](https://www.typescriptlang.org/) was chosen (while not required since React gives developers a choice to use TS or JS) to encourage maintainability and code consistency. 

Benefits of TypeScript:
 - Allows clear definition of PropTypes - prevents undefined errors
 - Forces developers into a specific code style
 - Integrates with editor to catch bugs before bad code is even committed
 - According to the [Association for Computing Machinery](https://dl.acm.org/), TypeScript has been shown to [reduce bugs by 15%](https://dl.acm.org/doi/abs/10.1145/2676726.2676971)

Drawbacks of TypeScript:
- Takes some time to learn
- May increases build time marginally since code building needs to go through another layer of compilation
- Some third party libraries may not have type definitions (but would we want to use those if they lacked a TypeScript option?) 

Typescript may not be suitable for all new React projects but is worth discussing in a dev team considering the value it adds in the prevention of bugs, improved ability to scale, and concice tracking of props through a React application.
 

### Material UI
Since there were no specific stylistic requirements outlined, [Material Ui](https://mui.com/) was added to the repo to build the application as quickly as possible. It provides pre-designed, customizable components allowing this product to be quickly shipped.  

## Available Scripts
#### `npm start`

Runs the app in the development mode at [http://localhost:3000](http://localhost:3000)

#### `npm test`
Launches the test runner in the interactive watch mode. More about [running tests here](https://facebook.github.io/create-react-app/docs/running-tests).

#### `npm run build`
Builds the app for production to the `build` folder. Bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. [Deployment info here](https://facebook.github.io/create-react-app/docs/deployment)
