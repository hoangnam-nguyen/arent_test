### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Data

Data is fetched through API calls that are handled by axios combined with Redux-React.
The steps needed for each data call are clearly divided into api, actions, reducers and constants folders. The basic actions include log in, sign up, fetch general data (when not logged in) and fetch user data (when logged in).

### Frontend

The two-page website allows for page navigation, consuming and presenting data. The design relies mostly on Material UI, while charts are created using Canvas ReactJS.
