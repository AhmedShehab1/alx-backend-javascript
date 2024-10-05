import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(fileName);

  return Promise.allSettled([p1, p2]).then((results) => {
    const newArray = [];
    results.forEach((result) => {
      newArray.push({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : String(result.reason),
      });
    });

    return newArray;
  });
}
