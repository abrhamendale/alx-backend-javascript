//import {uploadPhoto} from './utils.js';
//import {createUser} from './utils.js';

function signUpUser(firstName, lastName){
	return new Promise(function(resolve, reject){
		resolve({"firstName": firstName, "lastName": lastName});
		reject(Error());
	});
}
module.exports = signUpUser;
