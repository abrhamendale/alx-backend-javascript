function promiseState(p) {
	  const t = {};
	  return Promise.race([p, t])
	    .then(v => (v === t)? "pending" : "fulfilled", () => "rejected");
}
export default function loadBalancer(chinaDownload, USDownload) {
	return Promise.race([chinaDownload, USDownload]).then(function(value){
		return value;
	});
}
