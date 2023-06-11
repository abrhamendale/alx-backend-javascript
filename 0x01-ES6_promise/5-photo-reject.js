export default function uploadPhoto(filename) {
  return new Promise(((resolve, reject) => {
    // resolve({"firstName": firstName, "lastName": lastName});
    reject(Error(filename + ' cannot be processed', { fileName: filename }));
  }));
}
