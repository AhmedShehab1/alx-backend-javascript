const express = require('express');
const fs = require('fs');

const app = express();

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

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const path = process.argv[2];
  res.set('Content-Type', 'text/plain');
  let responseText = 'This is the list of our students\n';

  countStudents(path).then((msg) => {
    responseText += msg.join('\n');
    res.send(responseText);
  }).catch((err) => {
    res.send(`This is the list of our students\n${err.message}`);
  });
});

app.listen(1245);

module.exports = app;

