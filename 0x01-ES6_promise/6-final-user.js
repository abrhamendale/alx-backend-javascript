import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function promiseState(p) {
  const t = {};
  return Promise.race([p, t])
    .then((v) => ((v === t) ? 'pending' : 'fulfilled'), () => 'rejected');
}
function handleProfileSignup(firstName, lastName, fileName) {
  const v1 = signUpUser(firstName, lastName);
  // const v2 = uploadPhoto(fileName);
  // promiseState(v1).then((state) => {return state;});
  // promiseState(v2).then((state) => {return state;});
  // const a = Promise.resolve();
  return ([{ status: promiseState(v1).then((state) => state), value: v1 }]);
}
module.exports = handleProfileSignup;
