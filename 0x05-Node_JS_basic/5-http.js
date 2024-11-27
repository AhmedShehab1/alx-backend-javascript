const http = require('http');
const fs = require('fs');
const path = process.argv[2];

const parseData = (data) => {
  const group = {};
  let arr = data.split('\n');

  arr = arr.map((row) => row.split(','));
  for (const r of arr.slice(1)) {
    if (!group[r.at(-1)]) {
      group[r.at(-1)] = [];
    }
    group[r.at(-1)].push(r.at(0));
  }

  return group;
};

const countStudents = (path) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, content) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        content = content.trim();
        const students = parseData(content);
        const response = [];
        response.push(`Number of students: ${Object.values(students).reduce((total, curr) => total.length + curr.length)}`);
        for (const course in students) {
          response.push(`Number of students in ${course}: ${students[course].length}. List: ${students[course].join(', ')}`);
        }
        resolve(response);
      }
    });
  });
  return promise;
};

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    let responseText = 'This is the list of our students\n';
    countStudents(path)
      .then((response) => {
        responseText += response.join('\n');
        res.write(responseText);
        res.end();
      }).catch((err) => {
        res.write(`This is the list of our students\n${err.message}`);
        res.end();
      });
  }
});

app.listen(1245, 'localhost');

module.exports = app;

