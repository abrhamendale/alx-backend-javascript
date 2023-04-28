function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve(1);
    reject(Error('No rejection'));
  });
}
module.exports = getResponseFromAPI;
