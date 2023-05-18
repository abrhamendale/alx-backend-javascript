// import {uploadPhoto} from './utils.js';
// import {createUser} from './utils.js';

function signUpUser(firstName, lastName) {
  return new Promise(((resolve, reject) => {
    resolve({ firstName, lastName });
    reject(Error());
  }));
}
module.exports = signUpUser;
