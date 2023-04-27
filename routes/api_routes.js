const router = require('express').Router();
const express = require('express');
const fs = require ('fs');
const { v4: uuidv4} = require('uuid');


//create an 'if' statement incase of error. This will make sure to check to see if file exists and creates if it doesn't

if (!fs.existsSync('db.json')) {
   fs.writeFile('db.json', JSON.stringify([]), function(error) {
        if(error){
            return console.log('Whoa! You have an error! Please try again.');
        }


   });
}
// EVERY ROUTE IN THIS FILE will be prefixed with '/api'

//add http request methods: Get post put delete
// this ENDPOINT is '/api/' -> GET METHOD

// this endpoint is '/api/notes'
router.get('/api/notes',  (req, res) => {
    const notes = fs.readFileSync('db.json');
     res.send(notes);
}); 


// CREATE A RESOURCE
router.post('/api/notes', express.json(),(req, res) => {
    const notes = JSON.parse(fs.readFileSync())
    const note = req.body

    note.id = uuidv4();
    notes.push(note);
    frameElement.writeFile('db.json', JSON.stringify(notes), function(error) {
        if (error) {
            return console.log (error);
        }
        res.send(note);
    }
    
    )


});

// UPDATE A RESOURCE


router.delete('/api/notes/:id', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('db.json'));
    const filterNotes = notes.filter(note => note.id !==req.params.id)
    fs.writeFile('db.json', JSON.stringify(filterNotes), function(error) {
       if(error) {
        return console.log(error);
       }
             res.send(notes);
    });

});

module.exports = router;

    
