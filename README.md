# usabillaAssignment

Front-End Project assigned by Usabilla. Consists of rendering a list of items pulled from a json file based on a provided design. The items can be filtered by comment, rating or both. 

## Notes:

*Initially, I wanted to render the data through Axios but it seemed the server did not allow controlled-origin requests. In any case, functions to fetch the data both locally (from json file) and remotely (http requests) were included within the helper folder.

*Stylabilla was included on the top so html tags are normalized according to Usabilla's styleguideline.

*CSS Modules was implemented in order to avoid class collision as well as to keep the styles encapsulated within components.

*If one of the rows is clicked, a modal presenting extra information is shown.

*A custom scrollable table component was created in order to render the feed items. Depending on a mobileBreakpoint prop, the layout will change.
(This layout was the first thing I could come up with at the moment, so I just went along with it. :P)

## Getting Started

Clone this repository into your local machine.

### Installing

Installing all dependencies

```
npm install 
```

Running in Development

```
npm run start
```

Or if you just want to see the output in production, then go to:

```
dist/index.html
```


## Running the tests

Run the test for the helper functions using jest:

```
npm run test
```

## Deployment

To save changes to production:

```
npm run build
```

## Built With
* HTML5 /CSS3 (CSS Modules in order to encapsulate styles within components.)
* JavaScript,[React](https://reactjs.org/) 
* [Webpack](https://webpack.js.org/)
* [Jest](https://jestjs.io)
* [Stylabilla] (https://github.com/usabilla/stylabilla) to normalize default styles according to Usabilla' guideline.


## Author

***Cristian Restituyo** - [restcristian](https://github.com/restcristian)




