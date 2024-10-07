/* eslint-disable */
export default function cleanSet(set, startString) {
  if (startString.length === 0) return '';

  const arr = Array.from(set);
  return arr
    .filter((str) => str.startsWith(startString))
	    	 .map((str) => str.substr(startString.length))
    .join('-');
}
