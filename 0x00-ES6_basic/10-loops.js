export default function appendToEachArrayValue(array, appendString) {
  const newArray = array;
  for (const [idx, val] of newArray.entries()) {
    newArray[idx] = appendString + val;
  }

  return newArray;
}
