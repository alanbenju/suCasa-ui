



# suCasa UI

UI with react+redux to use suCasa backend
- Create presentations
- Create attendees
- Add attendee to presentation

This UI was developed in a short amount of time, in consecuence it's incomplete and not production ready.

## TODOs
- Unit testing
    - Components
    - Containers
    - Slices (reducers + actions)
- e2e testing
- Snapshots
- Use environment variables
- No border cases were considered
- Error handling
- Toasts/popups for requests responses both errors and successes
- Routes + Functionalities in different pages
- Styling

## Test environment
Test in: https://su-casa-ui.vercel.app/

Backend is not secure so when the site is opened for the first time you will get: `ERR_CERT_AUTHORITY_INVALID`. 

To solve the error, open the backend url (or ip) in a new tab and proceed as unsafe

## Available Scripts

In the project directory, you can run:

### `npm start` or `docker-compose up`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.