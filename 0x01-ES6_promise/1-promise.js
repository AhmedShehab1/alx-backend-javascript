export default function getFullResponseFromAPI(success) {
  if (success) {
    return (new Promise((resolve) => {
      resolve({
        status: 200,
        body: 'Success',
      });
    }));
  }
  return (new Promise((resolve, reject) => {
    reject(new Error('The fake API is not working currently'));
  }));
}
