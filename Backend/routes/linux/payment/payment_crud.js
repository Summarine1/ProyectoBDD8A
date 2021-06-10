const Router = require('express').Router();
const Payment = require('../../../interfaces/Payment.js');
const MySQLPoolLinux = require('../../../connections/MySQLPoolLinux.js');

Router.get('/all', async (req, res) => {
	if (Object.keys(req.query).length != 0) {
		if (req.query.name !== undefined) {
			const NameSearch = req.query.name;
			MySQLPoolLinux.query(`SELECT * FROM pay where title like '%${NameSearch}%';`,
				(err, results, fields) => {
					if (err) {
						res.status(400).json({ error: err.sqlMessage, code: err.code });
						return;
					}
					else {
						results.splice(30);
						const Projects = results.map(x => new Payment(x));
						console.log(Projects);
						res.json([...Projects]);
					}
				}
			)
		}
		else {
			res.status(400).json({ error: "Invalid arguments" });
		}
	}
	else {
		MySQLPoolLinux.query('SELECT * FROM pay;', (err, results, fields) => {
			if (err) {
				res.status(400).json({ error: err.sqlMessage, code: err.code });
				return;
			}
			else {
				results.splice(30);
				const Projects = results.map(x => new Payment(x));
				console.log(Projects);
				res.json([...Projects]);
			}
		});

	}
});

Router.post('/new', async (req, res) => {
	if (!req.body) {
		res.json({ error: "Object Missing" });
	}
	else if (!req.body.pay) {
		res.json({ error: "No payment has been defined" });
	}
	else {
		MySQLPoolLinux.query('SELECT CAST(SUBSTRING(payno, 4, 10) AS UNSIGNED) AS ID FROM pay ORDER BY ID DESC;',
			(err, results, fields) => {
				if (err) {
					res.status(400).json({ error: err.sqlMessage, code: err.code });
					return;
				}
				else {
					const id = results[0].ID + 1;
					const { pay } = req.body;
					MySQLPoolLinux.query(`INSERT INTO pay(payno, title, salary) 
					VALUES ('PAY${id}', '${pay.title}', ${pay.salary});`, (err, results, fields) => {
						if (err) {
							res.status(400).json({ error: err.sqlMessage, code: err.code });
							return;
						}
						console.log(results);
						res.json({ results });
					});
				}
			});
	}
});


Router.put('/update', async (req, res) => {
	if (!req.body) {
		res.json({ error: "Object Missing" });
	}
	else if (!req.body.pay) {
		res.json({ error: "No payment has been defined" });
	}
	else {
		const { pay } = req.body;
		MySQLPoolLinux.query(`UPDATE pay SET title='${pay.title}', salary='${pay.salary}'
			where payno='${pay.payno}'`, (err, results, fields) => {
			if (err) {
				res.status(400).json({ error: err.sqlMessage, code: err.code });
				return;
			}
			console.log(results);
			res.json({ results });
		});
	}
});

Router.delete('/delete', async (req, res) => {
	if (!req.body) {
		res.json({ error: "Object Missing" });
	}
	else if (!req.body.pay) {
		res.json({ error: "No payment has been defined" });
	}
	else {
		const { pay } = req.body;
		MySQLPoolLinux.query(`DELETE FROM pay where payno='${pay.payno}'`, (err, results, fields) => {
			if (err) {
				res.status(400).json({ error: err.sqlMessage, code: err.code });
				return;
			}
			console.log(results);
			res.json({ results });
		});
	}
});

module.exports = Router;
