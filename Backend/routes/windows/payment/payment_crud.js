const Router = require('express').Router();
const Payment = require('../../../interfaces/Payment.js');
const MySQLPoolWindows = require('../../../connections/MySQLPoolWindows.js');

Router.get('/newid', async (req, res) => {
	MySQLPoolWindows.query('SELECT CAST(SUBSTRING(payno, 4, 10) AS UNSIGNED) AS ID FROM pay ORDER BY ID DESC;',
		(err, results, fields) => {
			if(err){
				res.status(400).json({err});
			}
			else{
				res.json(`PAY${results[0].ID+1}`);
			}
	});
});

Router.get('/all', async (req, res) => {
	if( Object.keys(req.query).length != 0){
		if(req.query.name !== undefined){
			const NameSearch = req.query.name;
			MySQLPoolWindows.query(`SELECT * FROM pay where title like '%${NameSearch}%';`, 
				(err, results, fields) => {
					if(err){
						res.status(400).json({err});
					}
					else{
						results.splice(30);
						const Projects = results.map(x => new Payment(x));
						console.log(Projects);
						res.json([...Projects]);
					}
				}
			)
		}
		else{
			res.status(400).json({error: "Invalid arguments"});
		}
	}
	else{
		MySQLPoolWindows.query('SELECT * FROM pay;', (err, results, fields) => {
			if(err){
				res.status(400).json({err});
			}
			else{
				results.splice(30);
				const Projects = results.map( x => new Payment(x));
				console.log(Projects);
				res.json([...Projects]);
			}
		});

	}
});

Router.post('/new', async (req, res) => {
	if(!req.body){
		res.json({error: "Object Missing"});
	}
	else if(!req.body.pay){
		res.json({error: "No payment has been defined"});
	}
	else{
		const { pay } = req.body;
		MySQLPoolWindows.query(`INSERT INTO pay(payno, title, salary) 
			VALUES ('${pay.payno}', '${pay.title}', ${pay.salary});`, (err, results, fields) => {
				if(err){
					res.status(400).json({err});
				}
				console.log(results);
				res.json({results});
		});
	}
});

Router.put('/update', async (req, res) => {
	if(!req.body){
		res.json({error: "Object Missing"});
	}
	else if(!req.body.pay){
		res.json({error: "No payment has been defined"});
	}
	else{
		const { pay } = req.body;
		MySQLPoolWindows.query(`UPDATE pay SET title='${pay.title}', salary='${pay.salary}'
			where pno='${pay.payno}'`, (err, results, fields) => {
				if(err){
					res.status(400).json({err});
				}
				console.log(results);
				res.json({results});
		});
	}
});

Router.delete('/delete', async (req, res) => {
	if(!req.body){
		res.json({error: "Object Missing"});
	}
	else if(!req.body.pay){
		res.json({error: "No payment has been defined"});
	}
	else{
		const { pay } = req.body;
		MySQLPoolWindows.query(`DELETE FROM pay where payno='${pay.payno}'`, (err, results, fields) => {
				if(err){
					res.status(400).json({err});
				}
				console.log(results);
				res.json({results});
		});
	}
});

module.exports = Router;
