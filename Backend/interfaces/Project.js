function Project(pno, pname, budget){
	this.pno = pno;
	this.pname = pname;
	this.budget = budget;
}

function Project(objs){
	this.pno = objs.pno;
	this.pname = objs.pname;
	this.budget = objs.budget;
}

module.exports = Project;
