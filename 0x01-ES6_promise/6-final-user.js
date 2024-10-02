import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
	let p1 = signUpUser(firstName, lastName);
	let p2 = uploadPhoto(fileName);

	Promise.allSettled([p1, p2]).then((results) => {
		let results.forEach((result) => )
	})
}
