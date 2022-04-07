##About this app
The client side of hotel-full-app was created in the Create-React-App and the server side was created in node.js with Fastify.

My main goal during creating this app was to build simple version of hotel web app with basic functions like:
• registration,
• account login created during registration or login via gmail,
• possibility of creating own reservation by user and preview of all reservations, writing and editing comments on blog,
• adding likes to articles and comments other users.


##Technologies and libraries
**On the client side of my app I used the following technologies:
• Typescript,
• redux to manage state,
• react-router and react-router-dom to navigate components,
• axios to fetch data,
• styled components to design layout,
• Firebase to add authenticate using Google Sign-In,
• dotenv to load environment variables from .env file,
• query-string to parse query string into an object,
• react-toastify to add notifications to the app,
• react-material-table to add reservation list,
• react-parallax to add smooth titles scroll,
• react-loader-spinner to add spinner animation while loading.

**On server side I used:
• node.js,
• fastify,
• fastify-cors,
• fastify-plugin,
• jsonwebtoken,
• mongoose.


##How to run this app?
Clone repository with git clone https://github.com/grzes771/hotel-full-app.git
Fetch all dependencies on the server side using npm install and then go to the client - ./client and fetch all dependiences using also npm.
Run app using npm run dev or yarn dev.
Open http://localhost:3000 to view it in the browser.
Admin login: admin, admin password: adminadmin
