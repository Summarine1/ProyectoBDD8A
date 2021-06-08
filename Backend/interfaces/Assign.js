function Assign(eno, pno, resp, dur){
	this.eno = eno;
	this.pno = pno;
	this.resp = resp;
	this.dur = dur;
}

function Assign(objs){
	this.eno = objs.eno;
	this.pno = objs.pno;
	this.resp = objs.resp;
	this.dur = objs.dur;
}

module.exports = Assign;
