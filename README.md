## Published at

http://liszalisza.com/task-list-frontend/ 

## Assignment

Create a React application that keeps track of Tasks.
Requirements:

- Create a component that will render an Array of Tasks. (only render 5 initially and only render the "details" property of each Task). See Note1.

- Have a button that allows you to “Show More” which will render 5 more JSON objects every-time it is clicked until there are no more objects to display and then change to a "Show Less" button which will decreased the amount of tasks shown by 5 until there are only 5 tasks rendered.

- Allow Tasks to be "completed" by rendering a checkbox component for each Task. Clicking this box should update the "completed" property of a Task to either true or false based on if the box was checked or unchecked.

Note1: A Task JSON Object should have the following structure--
```
{
    id: Number, //This id needs to be Unique for each Task
    details: String,
    completed: Boolean
}
```

## Scripts
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

