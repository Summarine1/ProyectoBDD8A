function Payment(payno, title, salary){
	this.payno = payno;
	this.title = title;
	this.salary = salary;
};

function Payment(objs){
	this.payno = objs.payno;
	this.salary = objs.salary;
	this.title = objs.title;
}

module.exports = Payment;
