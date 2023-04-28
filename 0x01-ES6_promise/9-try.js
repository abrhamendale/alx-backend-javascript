function guardrail(mathFunction){
	var queue = [];
	queue.push(mathFunction());
	queue.push("Guardrail was processed");
	return queue;
}
module.exports = guardrail;
