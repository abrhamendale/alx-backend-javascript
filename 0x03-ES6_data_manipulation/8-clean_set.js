function cleanSet(s, startString) {
  let str = '';
  let res = '';
  if (Array.isArray(startString) && !startString.length) {
    return '';
  }
  s.forEach((value) => {
    if (value && value.startsWith(startString) && startString !== '') {
      res = str.concat(value.substring(3), '-');
      str = res;
    }
  });
  str = res.substring(0, res.length - 1);
  return str;
}
module.exports = cleanSet;
