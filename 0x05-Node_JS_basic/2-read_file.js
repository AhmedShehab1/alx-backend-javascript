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

function countStudents (path) {
  try {
    let content = fs.readFileSync(path, 'utf8');
    content = content.trim();
    const students = parseData(content);
    console.log(`Number of students: ${Object.values(students).reduce((total, curr) => total.length + curr.length)}`);
    for (const course in students) {
      console.log(`Number of students in ${course}: ${students[course].length}. List: ${students[course].join(', ')}`);
    }
  } catch (err) {
    console.error(err);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
