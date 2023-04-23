import {uploadPhoto} from './utils.js';
import {createUser} from './utils.js';

function handleProfileSignup(){
	var e = 0;
	var r1;
	let u1 = uploadPhoto();
		u1.then(function(result){
			r1 = result;
	}, () => {
		e = 1;
	});
	let c1 = createUser();
		c1.then(function(r2){
			if (e != 1){
				console.log(r1.body," ",r2.firstName," ",r2.lastName);
			}
			else{
				console.log("Signup system offline");
			}
	}, () => {
		console.log("Signup system offline");});
}
module.exports = handleProfileSignup;
