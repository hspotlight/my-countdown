const { eventGif } = require('./express/event')
const fs = require('fs');
const eventName ="Hacktoberfest Open Hack Day Bangkok 2021";
const padString ="0";
const startDate = new Date().getTime();
const endDate = new Date("Oct 30, 2021 09:00:00").getTime();

eventGif(fs.createWriteStream('myanimated.gif'), endDate, eventName, padString, startDate);