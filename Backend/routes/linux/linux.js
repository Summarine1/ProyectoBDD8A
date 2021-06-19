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
	MySQLPoolLinux.query('SELECT * FROM mostpayedthan ORDER BY salary ASC LIMIT 5;', (err, results, fields) => {
		if(err){
			res.status(400).send({error: err.sqlMessage, code: err.code});
			return;
		}else{
			const Titles = results.map( x => new Payment(x));
			console.log(Titles);
			res.json([...Titles]);
		}
	});
});

Router.get('/lesspayed', (req, res) => {
	MySQLPoolLinux.query('SELECT * FROM lesspayedthan ORDER BY salary DESC LIMIT 5;', (err, results, fields) => {
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

Router.get('/titlesinmiddle', (req, res) => {
	MySQLPoolLinux.query('select count(a.ename) count, a.title from (select emp.title, emp.ename from emp inner join middlepayed on emp.title = middlepayed.title) as a group by a.title;', (err, results, fields) => {
		if(err){
			res.status(400).send({error: err.sqlMessage, code: err.code});
			return;
		}else{
			const Count = results.map(x => {
				return {
				title: x.title,
				count: x.count
				}
			});
			console.log(Count);
			res.json([...Count]);
		}
	});
})

Router.get('/electeng', (req, res) => {
	MySQLPoolLinux.query('SELECT * FROM electeng;', (err, results, fields) => {
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
	MySQLPoolLinux.query('SELECT * FROM mecheng;', (err, results, fields) => {
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
	MySQLPoolLinux.query('SELECT * FROM systemanal;', (err, results, fields) => {
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
