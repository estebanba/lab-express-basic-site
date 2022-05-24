// First, we have to require Express so we can use it in our app
const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

// We tell our Express app that EJS will be in charge of rendering the HTML
const expressLayouts = require('express-ejs-layouts')

// creates an absolute path pointing to a folder called "views"
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(expressLayouts)

// Make everything inside of public/ available
app.use(express.static('public'));

// Routes
// app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));
// app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about-page.html'));

// Route with Render method, send views/index.ejs for displaying in the browser
app.get("/", (req, res, next) => res.render("home-page"));
app.get("/about", (req, res, next) => res.render("about-page"));
app.get("/works", (req, res, next) => res.render("works-page"));

// Server Started!
app.listen(3000, () => console.log('App listening on port 3000'));

// app.get('/cat', (request, response, next) => response.sendFile(__dirname + '/views/cat-page.html'));