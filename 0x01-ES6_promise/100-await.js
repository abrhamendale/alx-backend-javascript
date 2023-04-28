import {uploadPhoto} from './utils.js';
import {createUser} from './utils.js';

async function asyncUploadUser(){
	var res1 = uploadPhoto().then((result) => {return result;});
	var res2 = createUser().then((result) => {return result;});
	
	if (res1 && res2){
		return ({
			photo: res1,
			user: res2
		});
	}
	else{
		return ({
			photo: res1,
			user: res2
		});
	}
}
module.exports = asyncUploadUser;
