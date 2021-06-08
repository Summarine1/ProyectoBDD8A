function Employee(eno, ename, title){
	this.eno = eno;
	this.ename = ename;
	this.title = title;
};

function Employee(objs){
	this.eno = objs.eno;
	this.ename = objs.ename;
	this.title = objs.title;
}

module.exports = Employee;
