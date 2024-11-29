/* eslint-disable */
const fs = require('fs');

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

module.exports = (path) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, content) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        content = content.trim();
        const students = parseData(content);
        console.log(`Number of students: ${Object.values(students).reduce((total, curr) => total.length + curr.length)}`);
        for (const course in students) {
          console.log(`Number of students in ${course}: ${students[course].length}. List: ${students[course].join(', ')}`);
        }
        resolve();
      }
    });
  });
  return promise;
};
