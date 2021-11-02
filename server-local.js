'use strict';

const app = require('./express/event-gif');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Local app listening on port ${PORT}!`));
