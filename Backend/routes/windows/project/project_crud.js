const Router = require('express').Router();
const Project = require('../../../interfaces/Project.js');
const MySQLPoolWindows = require('../../../connections/MySQLPoolWindows.js');

Router.get('/all', async (req, res) => {
	if (Object.keys(req.query).length != 0) {
		if (req.query.name !== undefined) {
			const NameSearch = req.query.name;
			MySQLPoolWindows.query(`SELECT * FROM proj where pname like '%${NameSearch}%';`,
				(err, results, fields) => {
					if (err) {
						res.status(400).json({ error: err.sqlMessage, code: err.code });
						return;
					}
					else {
						results.splice(30);
						const Projects = results.map(x => new Project(x));
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
		MySQLPoolWindows.query('SELECT * FROM proj;', (err, results, fields) => {
			if (err) {
				res.status(400).json({ error: err.sqlMessage, code: err.code });
				return;
			}
			else {
				results.splice(30);
				const Projects = results.map(x => new Project(x));
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
	else if (!req.body.proj) {
		res.json({ error: "No project has been defined" });
	}
	else {
		MySQLPoolWindows.query('SELECT CAST(SUBSTRING(pno, 2, 10) AS UNSIGNED) AS ID FROM proj ORDER BY ID DESC;',
			(err, results, fields) => {
				if (err) {
					res.status(400).json({ error: err.sqlMessage, code: err.code });
					return;
				}
				else {
					const id = results[0].ID + 1;
					const { proj } = req.body;
					MySQLPoolWindows.query(`INSERT INTO proj(pno, pname, budget) 
					VALUES ('P${id}', '${proj.pname}', ${proj.budget});`, (err, results, fields) => {
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
	else if (!req.body.proj) {
		res.json({ error: "No project has been defined" });
	}
	else {
		const { proj } = req.body;
		MySQLPoolWindows.query(`UPDATE proj SET pname='${proj.pname}', budget='${proj.budget}'
			where pno='${proj.pno}'`, (err, results, fields) => {
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
	else if (!req.body.proj) {
		res.json({ error: "No project has been defined" });
	}
	else {
		const { proj } = req.body;
		MySQLPoolWindows.query(`DELETE FROM proj where pno='${proj.pno}'`, (err, results, fields) => {
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
