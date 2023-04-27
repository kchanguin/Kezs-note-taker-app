const router = require('express').Router();



//create a path
const path = require('path');


//app.get is setting up a route(or setting up a listener). 
router.get('/', (client_request, server_response) => {
    server_response.sendFile(path.join(process.cwd(), 'public/index.html'));

});

router.get('/notes', (client_request, server_response) => {
    server_response.sendFile(path.join(process.cwd(), 'public/notes.html'));
});


module.exports = router;

