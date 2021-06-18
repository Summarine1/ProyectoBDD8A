const Router = require('express').Router();

const EmployeeCRUD = require('./employee/employee_crud.js');
const ProjectCRUD = require('./project/project_crud.js');
const PaymentCRUD = require('./payment/payment_crud.js');
const AssignCRUD = require('./assign/assign_crud.js');
const MySQLPoolLinux = require('../../connections/MySQLPoolLinux.js');
const Payment = require('../../interfaces/Payment.js');
const Employee = require('../../interfaces/Employee.js');

Router.use('/employee', EmployeeCRUD);
Router.use('/project', ProjectCRUD);
Router.use('/payment', PaymentCRUD);
Router.use('/assign', AssignCRUD);

Router.get('/mostpayed', (req, res) => {
	MySQLPoolLinux.query('SELECT * FROM MostPayed;', (err, results, fields) => {
		if(err){
			res.status(400).send({error: err.sqlMessage, code: err.code});
			return;
		}else{
			const Titles = results.map(x => new Payment(x));
			console.log(Titles);
			res.json([...Titles]);
		}
	});
});

Router.get('/lesspayed', (req, res) => {
	MySQLPoolLinux.query('SELECT * FROM LessPayed;', (err, results, fields) => {
		if(err){
			res.status(400).send({error: err.sqlMessage, code: err.code});
			return;
		}else{
			const Titles = results.map(x => new Payment(x));
			console.log(Titles);
			res.json([...Titles]);
		}
	})
});

Router.get('/electeng', (req, res) => {
	MySQLPoolLinux.query('SELECT * FROM ElectEng;', (err, results, fields) => {
		if(err){
			res.status(400).send({error: err.sqlMessage, code: err.code});
			return;
		}else{
			const Employees = results.map(x => new Employee(x));
			console.log(Employees);
			res.json([...Employees]);
		}
	});
});

Router.get('/mecheng', (req, res) => {
	MySQLPoolLinux.query('SELECT * FROM MechEng;', (err, results, fields) => {
		if(err){
			res.status(400).send({error: err.sqlMessage, code: err.code});
			return;
		}else{
			const Employees = results.map(x => new Employee(x));
			console.log(Employees);
			res.json([...Employees]);
		}
	});
});

Router.get('/systemanal', (req, res) => {
	MySQLPoolLinux.query('SELECT * FROM SystemAnal;', (err, results, fields) => {
		if(err){
			res.status(400).send({error: err.sqlMessage, code: err.code});
			return;
		}else{
			const Employees = results.map(x => new Employee(x));
			console.log(Employees);
			res.json([...Employees]);
		}
	});
});

module.exports = Router;
