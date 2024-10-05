export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({ body: 'success', status: 200 })).catch(() => { throw new Error(); }).finally(() => { console.log('Got a response from the API'); });
}
