'use strict';
const express = require('express')
const { eventGif } = require('./event')
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express()
const router = express.Router();

router.get('/', (req, res) => {
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
          //res.set('Content-Type', 'text/plain');
          //res.set('Content-type', 'img/gif');
          res.set("accept-ranges", "bytes;");
          res.set("Content-Disposition", "inline;");
          res.set('transfer-encoding', '');
          res.contentType('image/gif');

          eventGif(res, endDate, eventName, padString, startDate);
});
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/event-gif', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);