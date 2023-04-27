const express = require('express');
const view_routes = require('./routes/html_routes.js')
const api_routes = require('./routes/api_routes.js')

const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
// These two lines PARSE the INCOMING data body Request OBJECT
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/test', function(req, res) {
    // run some logic 

    res.status(200).json({ message: "Hit Tets Route"})
})

app.post('/test', (req, res) => {

})
// routes or Routing
app.use('/', view_routes);
app.use('/api', api_routes);

app.listen(PORT,() => {
    console.log('Listening on port %s', PORT)
})


//const html_routes = require('./routes/html_routes')
//const api_routes = require('./routes/api_routes')


