const mysql = require('mysql');

const MySQLPoolWindows = mysql.createPool({
	host: '172.23.137.221',
	user: 'wndarchitect',
	password: 'ProyectoBDD8A',
	database: 'acmewnd'
});

module.exports = MySQLPoolWindows;
