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

Router.get('/getallpays', (req, res) => {
	MySQLPoolLinux.query('SELECT count(*) count, ">35000" as label FROM mostpayedthan inner join emp on emp.title = mostpayedthan.title union \
							SELECT count(*) count, ">= 20000 & <=35000" FROM middlepayed inner join emp on emp.title = middlepayed.title union \
							SELECT count(*) count, "<20000" FROM lesspayedthan inner join emp on emp.title = lesspayedthan.title;;', (err, results, fields) => {
		if(err){
			res.status(400).send({error: err.sqlMessage, code: err.code});
			return;
		}else{
			console.log(results);
			const Pays = results.map(x => x.count);
			res.send([...Pays]);
		}
	});
});

Router.get('/gettitles', (req, res) => {
	MySQLPoolLinux.query('SELECT count(*) count, title FROM electeng union \
						SELECT count(*) count, title FROM mecheng union \
						SELECT count(*) count, title FROM systemanal;', (err, results, fields) => {
		if(err){
			res.status(400).send({error: err.sqlMessage, code: err.code});
			return;
		}else{
			console.log(results);
			const Titles = results.map(x => {
				return {
					label: x.title,
					count: x.count
				};
			})
			res.send([...Titles]);
		}
	});
});

module.exports = Router;
