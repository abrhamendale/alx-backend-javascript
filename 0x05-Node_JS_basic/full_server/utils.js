const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

function counter(cline) {
  const fld = [];
  const fldc = [];
  const st = [];
  for (let i = 1; i < cline.length; i += 1) {
    if (cline[i].split(',')[3]) {
      if (fld.includes(cline[i].split(',')[3]) === false && cline[i] !== '') {
        fld.push(cline[i].split(',')[3]);
      }
    }
  }
  for (let i = 0; i < fld.length; i += 1) {
    fldc.push(0);
    st.push('');
    for (let j = 1; j < cline.length; j += 1) {
      if (cline[j].split(',')[3] !== '') {
        if (cline[j].split(',')[3] === fld[i]) {
          fldc[i] += 1;
          if (st[i] !== '') {
            st[i] += ', ';
          }
          st[i] += cline[j].split(',')[0];
        }
      }
    }
  }
  let count = 0;
  for (let i = 1; i < cline.length; i += 1) {
    if (cline[i] !== '' && cline[i].split(',')[3]) {
      count += 1;
    }
  }
  console.log('Number of students:', count);
  for (let i = 0; i < fld.length; i += 1) {
    const str = fld[i];
    console.log(`Number of students in ${str}: ${fldc[i]}. List:`, st[i]);
  }
}

async function readDatabase(file) {
  try {
    const data = await readFile(file, 'utf-8');
    const clines = data.split('\n');
    counter(clines);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
