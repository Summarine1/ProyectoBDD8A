const Router = require('express').Router();
const Employee = require('../../../interfaces/Employee.js');
const MySQLPoolWindows = require('../../../connections/MySQLPoolWindows.js');

Router.get('/all', async (req, res) => {
	if (Object.keys(req.query).length != 0) {
		if (req.query.name !== undefined) {
			const NameSearch = req.query.name;
			MySQLPoolWindows.query(`SELECT * FROM emp where ename like '%${NameSearch}%';`,
				(err, results, fields) => {
					if (err) {
						res.status(400).json({ error: err.sqlMessage, code: err.code });
						return;
					}
					else {
						results.splice(30);
						const Employees = results.map(x => new Employee(x));
						console.log(Employees);
						res.json([...Employees]);
					}
				}
			)
		}
		else {
			res.status(400).json({ error: "Invalid arguments" });
		}
	}
	else {
		MySQLPoolWindows.query('SELECT * FROM emp;', (err, results, fields) => {
			if (err) {
				res.status(400).json({ error: err.sqlMessage, code: err.code });
				return;
			}
			else {
				results.splice(30);
				const Employees = results.map(x => new Employee(x));
				console.log(Employees);
				res.json([...Employees]);
			}
		});

	}
});

Router.post('/new', async (req, res) => {
	if (!req.body) {
		res.json({ error: "Object Missing" });
	}
	else if (!req.body.emp) {
		res.json({ error: "No employee has been defined" });
	}
	else {
		const { emp } = req.body;
		MySQLPoolWindows.query('SELECT CAST(SUBSTRING(eno, 2, 10) AS UNSIGNED) AS ID FROM emp ORDER BY ID DESC;',
			(err, results, fields) => {
				if (err) {
					res.status(400).json({ error: err.sqlMessage, code: err.code });
					return;
				}
				else {
					const id = results[0].ID + 1;
					MySQLPoolWindows.query(`INSERT INTO emp(eno, ename, title) 
					VALUES ('E${id}', '${emp.ename}', '${emp.title}');`, (err, results, fields) => {
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
	else if (!req.body.emp) {
		res.json({ error: "No employee has been defined" });
	}
	else {
		const { emp } = req.body;
		MySQLPoolWindows.query(`UPDATE emp SET ename='${emp.ename}', title='${emp.title}'
			where eno='${emp.eno}'`, (err, results, fields) => {
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
	else if (!req.body.emp) {
		res.json({ error: "No employee has been defined" });
	}
	else {
		const { emp } = req.body;
		MySQLPoolWindows.query(`DELETE FROM emp where eno='${emp.eno}'`, (err, results, fields) => {
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
