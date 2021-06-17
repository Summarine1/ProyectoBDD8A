const mysql = require('mysql');

const MySQLPoolWindows = mysql.createPool({
	host: '172.23.184.86',
	user: 'wndarchitect',
	password: 'ProyectoBDD8A',
	database: 'acmewnd'
});

module.exports = MySQLPoolWindows;
