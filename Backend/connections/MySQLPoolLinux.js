const mysql = require('mysql');

const MySQLPoolLinux = mysql.createPool({
	host: '172.23.25.96',
	user: 'lnxarchitect',
	password: '0l1v3tt1_@lv@r32_lnxarchitect',
	database: 'acmelnx'
});

module.exports = MySQLPoolLinux;
