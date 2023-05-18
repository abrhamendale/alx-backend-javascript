import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  let e = 0;
  let r1;
  const u1 = uploadPhoto();
  u1.then((result) => {
    r1 = result;
  }, () => {
    e = 1;
  });
  const c1 = createUser();
  c1.then((r2) => {
    if (e !== 1) {
      console.log(r1.body, ' ', r2.firstName, ' ', r2.lastName);
    } else {
      console.log('Signup system offline');
    }
  }, () => {
    console.log('Signup system offline');
  });
}
module.exports = handleProfileSignup;
