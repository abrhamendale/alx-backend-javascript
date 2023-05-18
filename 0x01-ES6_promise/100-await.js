import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  const res1 = uploadPhoto().then((result) => result);
  const res2 = createUser().then((result) => result);

  if (res1 && res2) {
    return ({
      photo: res1,
      user: res2,
    });
  }

  return ({
    photo: res1,
    user: res2,
  });
}
module.exports = asyncUploadUser;
