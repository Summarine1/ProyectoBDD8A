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
	MySQLPoolWindows.query('SELECT count (*) count FROM highbudget;', (err, result, fields) => {
		if(err){
			res.status(400).json({error: err.sqlMessage, code: err.code});
			return;
		}else{
			console.log(result);
			res.send(result[0].count);
		}
	});
});

Router.get('/lowbudget', (req, res) => {
	MySQLPoolWindows.query('SELECT count(*) count FROM lowbudget;', (err, result, fields) => {
		if(err){
			res.status(400).json({error: err.sqlMessage, code: err.code});
			return;
		}else{
			console.log(result);
			res.send(result[0].count);
		}
	});
});

Router.get('/medbudget', (req, res) => {
	MySQLPoolWindows.query('SELECT count(*) count FROM medbudget;', (err, result, fields) => {
		if(err){
			res.status(400).json({error: err.sqlMessage, code: err.code});
			return;
		}else{
			console.log(result);
			res.send(result[0].count);
		}
	});
});

Router.get('/maxdur', (req, res) => {
	MySQLPoolWindows.query('SELECT count(*) count FROM maxdur;', (err, result, fields) => {
		if(err){
			res.status(400).json({error: err.sqlMessage, code: err.code});
			return;
		}else{
			console.log(result);
			res.send(result[0].count);
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
	MySQLPoolWindows.query('SELECT count(*) count FROM mindur;', (err, result, fields) => {
		if(err){
			res.status(400).json({error: err.sqlMessage, code: err.code});
			return;
		}else{
			console.log(result)
			res.send(result[0].count);
		}
	});
});

module.exports = Router;
