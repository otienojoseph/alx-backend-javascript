export default function appendToEachArrayValue(array, appendString) {
  for (let [idx, element] of array.entries()) {
    array[idx] = appendString + element;
  }

  return array;
}
