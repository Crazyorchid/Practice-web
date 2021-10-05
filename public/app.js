const express = require('express');
const todoControllers = require('./controllers/todoController');

const app = express();

app.set('view engine', 'ejs');

todoControllers(app);

app.use(express.static('./public'));

app.listen(3000)

console.log("Listing to port 3000")