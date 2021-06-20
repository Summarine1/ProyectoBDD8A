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

Router.get('/budgets', (req, res) => {
	MySQLPoolWindows.query('SELECT count (*) count, "High" FROM highbudget union \
							SELECT count(*) count, "Med" FROM medbudget union \
							SELECT count(*) count, "Low" FROM lowbudget;', (err, result, fields) => {
		if(err){
			res.status(400).json({error: err.sqlMessage, code: err.code});
			return;
		}else{
			console.log(result);
			const Budgets = result.map(x => x.count);
			res.send(Budgets);
		}
	});
});

Router.get('/durations', (req, res) => {
	MySQLPoolWindows.query('SELECT count(*) count, "Max" FROM maxdur union \
							SELECT count(*) count, "Med" FROM meddur union \
							SELECT count(*) count, "Min" FROM mindur;', (err, result, fields) => {
		if(err){
			res.status(400).json({error: err.sqlMessage, code: err.code});
			return;
		}else{
			console.log(result);
			const Durations = result.map(x => x.count);
			res.send(Durations);
		}
	});
});

module.exports = Router;
