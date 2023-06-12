const fs = require('fs');

function counter(cline) {
  const fld = [];
  const fldc = [];
  const st = [];
  for (let i = 1; i < cline.length; i += 1) {
    if (fld.includes(cline[i].split(',')[3]) === false && cline[i] !== '') {
      fld.push(cline[i].split(',')[3]);
    }
  }
  for (let i = 0; i < fld.length; i += 1) {
    fldc.push(0);
    st.push('');
    for (let j = 1; j < cline.length; j += 1) {
      if (cline[j].split(',')[3] === fld[i]) {
        fldc[i] += 1;
        if (st[i] !== '') {
          st[i] += ', ';
        }
        st[i] += cline[j].split(',')[0];
      }
    }
  }
  console.log('Number of students:', cline.length - 2);
  for (let i = 0; i < fld.length; i += 1) {
    const str = fld[i];
    console.log(`Number of students in ${str}: ${fldc[i]}. List:`, st[i]);
  }
  console.log('Done!');
}

function countStudents(file) {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      /*
       * console.log(err);
       */
      throw new Error('Cannot load the database');
    } else {
      const clines = data.split('\n');
      counter(clines);
    }
  });
}
module.exports = countStudents;
