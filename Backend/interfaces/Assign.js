function Assign(lastEno, lastPno, eno, pno, resp, dur){
	this.lastEno = lastEno;
	this.lastPno = lastPno
	this.eno = eno;
	this.pno = pno;
	this.resp = resp;
	this.dur = dur;
}

function Assign(objs){
	this.lastEno = objs.lastEno;
	this.lastPno = objs.lastPno
	this.eno = objs.eno;
	this.pno = objs.pno;
	this.resp = objs.resp;
	this.dur = objs.dur;
}

module.exports = Assign;
