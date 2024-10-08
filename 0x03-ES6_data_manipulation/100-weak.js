const weakMap = new WeakMap();
function queryAPI(endpoint) {
  const counter = weakMap.get(endpoint) + 1 || 1;
  if (counter === 5) throw new Error('Endpoint load is high');
  weakMap.set(endpoint, counter);
}
export { weakMap, queryAPI };
