function hasValuesFromArray(s, a){
	if (!Array.isArray(a) || !(s instanceof Set)){
		return false;
	}
	var b = 1;
	a.forEach(function(element){
		if (!s.has(element)){
			b = 0;
		}
	});
	if (b){
		return true;
	}
	else{
		return false;
	}
}
module.exports = hasValuesFromArray;
