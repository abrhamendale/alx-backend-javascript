function cleanSet(s, startString) {
  let str = "";
  let res = "";
  s.forEach((value) => {
    if (value.startsWith(startString) && startString != "") {
      res = str.concat(value.substring(3)+"-");
      str = res;
    }
  })
  str = res.substring(0, res.length - 1);
  return str;
}
module.exports = cleanSet;
