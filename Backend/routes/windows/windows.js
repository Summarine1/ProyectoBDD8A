const Router = require('express').Router();

const EmployeeCRUD = require('./employee/employee_crud.js');
const ProjectCRUD = require('./project/project_crud.js');
const PaymentCRUD = require('./payment/payment_crud.js');
const AssignCRUD = require('./assign/assign_crud.js');
const MySQLPoolWindows = require('../../connections/MySQLPoolWindows.js');
const Project = require('../../interfaces/Project.js');
const Assign = require('../../interfaces/Assign.js');

Router.use('/employee', EmployeeCRUD);
Router.use('/project', ProjectCRUD);
Router.use('/payment', PaymentCRUD);
Router.use('/assign', AssignCRUD);

Router.get('/highbudget', (req, res) => {
	MySQLPoolWindows.query('SELECT * FROM highbudget ORDER BY budget ASC LIMIT 5;', (err, result, fields) => {
		if(err){
			res.status(400).json({error: err.sqlMessage, code: err.code});
			return;
		}else{
			const Projects = result.map(x => new Project(x));
			console.log(Projects);
			res.send([...Projects]);
		}
	});
});

Router.get('/lowbudget', (req, res) => {
	MySQLPoolWindows.query('SELECT * FROM lowbudget ORDER BY budget DESC LIMIT 5;', (err, result, fields) => {
		if(err){
			res.status(400).json({error: err.sqlMessage, code: err.code});
			return;
		}else{
			const Projects = result.map(x => new Project(x));
			console.log(Projects);
			res.send([...Projects]);
		}
	});
});

Router.get('/medbudget', (req, res) => {
	MySQLPoolWindows.query('SELECT count(*) count FROM medbudget;', (err, result, fields) => {
		if(err){
			res.status(400).json({error: err.sqlMessage, code: err.code});
			return;
		}else{
			console.log(result[0].count);
			res.send({count: result[0].count});
		}
	});
});

Router.get('/maxdur', (req, res) => {
	MySQLPoolWindows.query('SELECT * FROM maxdur ORDER BY dur ASC LIMIT 5;', (err, result, fields) => {
		if(err){
			res.status(400).json({error: err.sqlMessage, code: err.code});
			return;
		}else{
			const Assigns = result.map(x => new Assign(x));
			console.log(Assigns);
			res.send([...Assigns]);
		}
	});
});

Router.get('/meddur', (req, res) => {
	MySQLPoolWindows.query('SELECT count(*) count FROM meddur;', (err, result, fields) => {
		if(err){
			res.status(400).json({error: err.sqlMessage, code: err.code});
			return;
		}else{
			console.log(result[0].count);
			res.send({count: result[0].count});
		}
	});
});

Router.get('/mindur', (req, res) => {
	MySQLPoolWindows.query('SELECT * FROM mindur ORDER BY dur DESC LIMIT 5;', (err, result, fields) => {
		if(err){
			res.status(400).json({error: err.sqlMessage, code: err.code});
			return;
		}else{
			const Assigns = result.map(x => new Assign(x));
			console.log(Assigns);
			res.send([...Assigns]);
		}
	});
});

module.exports = Router;
