const mysql = require('mysql');

const MySQLPoolWindows = mysql.createConnection({
	host: '172.23.137.221',
	user: 'wndarchitect',
	password: 'ProyectoBDD8A',
	database: 'acmeconsult'
});

module.exports = MySQLPoolWindows;
