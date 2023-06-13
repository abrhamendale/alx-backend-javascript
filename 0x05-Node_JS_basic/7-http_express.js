const express = require('express');
const fs = require('fs');
const util = require('util');

const app = express();
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
      if (cline[j].split(',')[3] === fld[i]) {
        fldc[i] += 1;
        if (st[i] !== '') {
          st[i] += ', ';
        }
        st[i] += cline[j].split(',')[0];
      }
    }
  }
  let count = 0;
  for (let i = 1; i < cline.length; i += 1) {
    if (cline[i] !== '' && cline[i].split(',')[3]) {
      count += 1;
    }
  }
  let buf = 'This is the list of our students\n';
  buf += `Number of students: ${count}`;
  for (let i = 0; i < fld.length; i += 1) {
    const str = fld[i];
    buf += `\nNumber of students in ${str}: ${fldc[i]}. List: ${st[i]}`;
  }
  return buf;
}

async function countStudents(file) {
  try {
    const data = await readFile(file, 'utf-8');
    const clines = data.split('\n');
    return counter(clines);
  } catch (err) {
    return new Error('Cannot load the database');
  }
}

const hostname = '127.0.0.1';
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  Promise.resolve(countStudents('database.csv')).then((result) => res.end(result));
});
module.exports = app;
app.listen(port, hostname, () => {
});
