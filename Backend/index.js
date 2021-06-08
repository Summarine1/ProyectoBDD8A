const Express = require('express');
const Cors = require('cors');
const BodyParser = require('body-parser');
const Port = process.env.PORT || 3000;
require('dotenv').config();

const App = Express();

App.use(Cors());
App.use(BodyParser.urlencoded({extended: false}));
App.use(BodyParser.json());

const Windows = require('./routes/windows/windows.js');
const Linux = require('./routes/linux/linux.js');

App.use('/windows', Windows);
App.use('/linux', Linux);

App.listen(Port, () => {
	console.log(`REST API executing on port: ${Port}`);
})
