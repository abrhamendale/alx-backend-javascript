function setFromArray(a){
	if (Array.isArray(a)){
		let mySet = new Set(a);
		return mySet;
	}
	else{
		return ("Set {}");
	}
}
module.exports = setFromArray;
