export default function createIteratorObject(report) {
	let ret = [];
	for (const k in Object.values(report.allEmployees)){
		console.log(Object.values(k[0]));
		ret.push(Object.values(k));
	}
  return ret;
}
