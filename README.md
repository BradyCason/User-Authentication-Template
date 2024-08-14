Template for website with user authentication made with Express server and PostgreSQL database

- Insert database connection string into a file named .env in the project directory
- add .env into .gitignore
- Update populatedb.js to create the correct tables in your database
- Run "node populatedb.js" to setup database
- Run "node --watch app.js" to test
- Deploy to PaaS, such as railway, when ready