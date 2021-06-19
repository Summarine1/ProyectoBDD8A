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
	MySQLPoolLinux.query('SELECT count(*) count FROM mostpayedthan inner join emp on emp.title = mostpayedthan.title;', (err, results, fields) => {
		if(err){
			res.status(400).send({error: err.sqlMessage, code: err.code});
			return;
		}else{
			console.log(results);
			res.json(results[0].count);
		}
	});
});

Router.get('/lesspayed', (req, res) => {
	MySQLPoolLinux.query('SELECT count(*) FROM lesspayedthan inner join emp on emp.title = lesspayedthan.title;', (err, results, fields) => {
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

Router.get('/middlepayed', (req, res) => {
	MySQLPoolLinux.query('select count(*) count from emp inner join middlepayed on emp.title = middlepayed.title;', (err, results, fields) => {
		if(err){
			res.status(400).send({error: err.sqlMessage, code: err.code});
			return;
		}else{
			res.json(results[0].count);
		}
	});
})

Router.get('/electeng', (req, res) => {
	MySQLPoolLinux.query('SELECT count(*) count FROM electeng;', (err, results, fields) => {
		if(err){
			res.status(400).send({error: err.sqlMessage, code: err.code});
			return;
		}else{
			console.log(results);
			res.json(results[0].count);
		}
	});
});

Router.get('/mecheng', (req, res) => {
	MySQLPoolLinux.query('SELECT count(*) count FROM mecheng;', (err, results, fields) => {
		if(err){
			res.status(400).send({error: err.sqlMessage, code: err.code});
			return;
		}else{
			console.log(results)
			res.json(results[0].count);
		}
	});
});

Router.get('/systemanal', (req, res) => {
	MySQLPoolLinux.query('SELECT count(*) count FROM systemanal;', (err, results, fields) => {
		if(err){
			res.status(400).send({error: err.sqlMessage, code: err.code});
			return;
		}else{
			console.log(results)
			res.json(results[0].count);
		}
	});
});

module.exports = Router;
