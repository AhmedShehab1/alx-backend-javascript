/* eslint-disable */
import fs from 'fs';


const readDatabase = (filePath) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
	      const students = content.trim().split('\n').slice(1);
	      const fields = {};

	      students.forEach((row) => {
		const [firstName, , , field] = row.split(',');
		      if (!fields[field]) fields[field] = [];
		      fields[field].push(firstName);
	      });
      	      resolve(fields);
      }
    });
  });
  return promise;
};

export default readDatabase;
