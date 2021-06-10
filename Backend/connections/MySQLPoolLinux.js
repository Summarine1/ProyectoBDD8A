const mysql = require('mysql');

const MySQLPoolLinux = mysql.createPool({
	host: '172.23.101.143',
	user: 'lnxarchitect',
	password: '0l1v3tt1_@lv@r32_lnxarchitect',
	database: 'acmeconsult'
});

module.exports = MySQLPoolLinux;
