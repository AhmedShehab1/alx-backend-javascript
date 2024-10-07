export default function hasValuesFromArray(set, arr) {
  return arr
    .filter((element) => set.has(element))
    .length === arr.length;
}
