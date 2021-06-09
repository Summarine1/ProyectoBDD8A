const Router = require('express').Router();
const Assign = require('../../../interfaces/Assign.js');
const MySQLPoolWindows = require('../../../connections/MySQLPoolWindows.js');

Router.get('/all', async (req, res) => {
	if( Object.keys(req.query).length != 0){
		if(req.query.name !== undefined){
			const NameSearch = req.query.name;
			MySQLPoolWindows.query(`SELECT * FROM asg where resp like '%${NameSearch}%';`, 
				(err, results, fields) => {
					if(err){
						res.status(400).json({err});
					}
					else{
						results.splice(30);
						const Assigns = results.map(x => new Assign(x));
						console.log(Assigns);
						res.json([...Assigns]);
					}
				}
			)
		}
		else{
			res.status(400).json({error: "Invalid arguments"});
		}
	}
	else{
		MySQLPoolWindows.query('SELECT * FROM asg;', (err, results, fields) => {
			if(err){
				res.status(400).json({err});
			}
			else{
				results.splice(30);
				const Assigns = results.map( x => new Assign(x));
				console.log(Assigns);
				res.json([...Assigns]);
			}
		});

	}
});

Router.post('/new', async (req, res) => {
	if(!req.body){
		res.json({error: "Object Missing"});
	}
	else if(!req.body.asg){
		res.json({error: "No assign has been defined"});
	}
	else{
		const { asg } = req.body;
		MySQLPoolWindows.query(`INSERT INTO asg(eno, pno, resp, dur) 
			VALUES ('${asg.eno}', '${asg.pno}', '${asg.resp}', ${asg.dur});`, (err, results, fields) => {
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
	else if(!req.body.asg){
		res.json({error: "No assign has been defined"});
	}
	else{
		const { asg } = req.body;
		MySQLPoolWindows.query(`UPDATE asg SET resp='${asg.resp}', dur='${asg.dur}'
			WHERE pno='${asg.pno}' AND eno='${asg.eno}'`, (err, results, fields) => {
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
	else if(!req.body.asg){
		res.json({error: "No assign has been defined"});
	}
	else{
		const { asg } = req.body;
		MySQLPoolWindows.query(`DELETE FROM asg where pno='${asg.pno}' AND eno='${asg.eno}'`, (err, results, fields) => {
				if(err){
					res.status(400).json({err});
				}
				console.log(results);
				res.json({results});
		});
	}
});

module.exports = Router;
