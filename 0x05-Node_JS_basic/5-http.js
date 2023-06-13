const http = require('http');
const fs = require('fs');
const util = require('util');
const path = require('path');

const readFile = util.promisify(fs.readFile);

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
  let count = 0;
  for (let i = 1; i < cline.length; i += 1) {
    if (cline[i] !== '') {
      count += 1;
    }
  }
  const buf = [];
  buf.push(`Number of students: ${count}`);
  for (let i = 0; i < fld.length; i += 1) {
    const str = fld[i];
    buf.push(`\nNumber of students in ${str}: ${fldc[i]}. List: ${st[i]}`);
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

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/students':
      res.statusCode = 200;
      Promise.resolve(countStudents(`${process.argv[2]}`)).then((result) => res.end(String(result)));
      break;
    default:
      res.statusCode = 200;
      res.end('Hello Holberton School!');
  }
});
module.exports = app;
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
