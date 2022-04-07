## About this app<br/>
The client side of hotel-full-app was created in the Create-React-App and the server side was created in node.js with Fastify.<br/>

My main goal during creating this app was to build simple version of hotel web app with basic functions like:<br/>
• registration,<br/>
• account login created during registration or login via mail,<br/>
• possibility of creating own reservation by user and preview of all reservations, writing and editing comments on blog,<br/>
• adding likes to articles and comments other users.<br/>


## Technologies and libraries<br/>
On the client side of my app I used the following technologies:<br/>
• Typescript,<br/>
• redux to manage state,<br/>
• react-router and react-router-dom to navigate components,<br/>
• axios to fetch data,<br/>
• styled components to design layout,<br/>
• dotenv to load environment variables from .env file,<br/>
• query-string to parse query string into an object,<br/>
• react-toastify to add notifications to the app,<br/>
• react-material-table to display reservation list,<br/>
• react-parallax to add smooth titles scroll,<br/>
• react-loader-spinner to add spinner animation while loading.<br/>

On server side I used:<br/>
• node.js,<br/>
• fastify,<br/>
• fastify-cors,<br/>
• fastify-plugin,<br/>
• jsonwebtoken,<br/>
• mongoose.<br/>


## How to run this app?<br/>
1.Clone repository with git clone https://github.com/grzes771/hotel-full-app.git<br/>
2.Fetch all dependencies on the server side using npm install and then go to the client - ./client and fetch all dependiences using also npm.<br/>
3.Run app using npm run dev or yarn dev.<br/>
4.Open http://localhost:3000 to view it in the browser.<br/>
5.Admin login: admin, admin password: adminadmin<br/>
