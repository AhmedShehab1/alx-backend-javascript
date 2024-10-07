export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const int8View = new Int8Array(buffer);
    int8View[position] = value;
    return buffer;
  } catch (e) {
    throw new Error('Position outside range');
  }
}
