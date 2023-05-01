# React chat application for Coding Ninja

This is a sample chat application. Initially, the users and chats are loaded from data.js file and stored into `localStorage`. Subsequently, data are always fetched from `localStorage` whenever page refreshes and loaded. This project features a Sidebar component, which shows all the previous conversations with different users. We can search for particular conversation by user name. Upon clicking on an user item, the conversations with that user are loaded on the right. On the top, when the search icon is clicked, a search bar opens, where we can search for a conversation. On the Sidebar when we click on user image icon, the home page opens. When we click on 'Start a Conversation' button, a popup will open with all the users listed. We can click on any user to open new chat, or continue existing conversation.

## Available Scripts

In the project directory, you can run:

### `npm start`

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
