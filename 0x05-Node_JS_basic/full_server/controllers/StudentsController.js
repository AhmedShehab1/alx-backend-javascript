/* eslint-disable */
import readDatabase from '../utils';

class StudentsController {
	static async getAllStudents(req, res) {
		const databasePath = process.argv[2];
		try {
			const studentsByField =  await readDatabase(databasePath);
			const responseLines = ['This is the list of our students'];
			Object.keys(studentsByField)
			.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
			.forEach((field) => {
				const students = studentsByField[field];
				responseLines.push(
					`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
				);
			});
			res.status(200).send(responseLines.join('\n'));
		} catch (err) {
			res.status(500).send(err.message);
		}
	}

	static async getAllStudentsByMajor(req, res) {
		const databasePath = process.argv[2];
		const { major } = req.params;

		if(!['CS', 'SWE'].includes(major)) {
			res.status(500).send('Major parameter must be CS or SWE');			  return;
		}
		
		try {
			const studentsByField = await readDatabase(databasePath);
			const students = studentsByField[major] || [];
			res.status(200).send(`List: ${students.join(', ')}`);
		} catch (err) {
			res.status(500).send(err.message);
		}
	}
}

export default StudentsController;
