import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

function promiseState(p) {
	const t = {};
	return Promise.race([p, t])
		.then(v => (v === t)? "pending" : "fulfilled", () => "rejected");
}
function handleProfileSignup(firstName, lastName, fileName){
	let v1 = signUpUser(firstName, lastName);
	let v2 = uploadPhoto(fileName);
	//promiseState(v1).then((state) => {return state;});
	//promiseState(v2).then((state) => {return state;});
	var a = Promise.resolve();
	return ([{status: promiseState(v1).then((state) => {return state;}), value: v1}]);
}
module.exports = handleProfileSignup;
