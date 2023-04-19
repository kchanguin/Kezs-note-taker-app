const express = require('express');
const html_routes = require('./routes/html_routes')
const api_routes = require('./routes/api_routes')
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlendcoded({ extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(html_routes)
app.use(api_routes)

app.listen(PORT, () => {
console.log('Server running on http://localhost:${PORT}');

})