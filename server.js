const express = require('express')
const { eventGif } = require('./event')

const app = express()

app.get('/event.gif', (req, res) => {
    
        // Access the provided 'page' and 'limt' query parameters
        
    if(!req.query.on) {
        res.status(400).end();
        next()
    }
    
        const eventName = (req.query.text) ? req.query.text : "Hacktoberfest Open Hack Day Bangkok 2021"
        const padString = (req.query.padding) ? req.query.padding :"0";
        const startDate = new Date().getTime();
        const eventDate = (req.query.on) ? req.query.on:"Oct 30, 2021 09:00:00";
        const endDate = new Date(eventDate).getTime();
        eventGif(res, endDate, eventName, padString, startDate);
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})