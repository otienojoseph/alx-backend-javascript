export default function appendToEachArrayValue(array, appendString) {
	for (let [idx, val] of array.entries()) {
		array[idx] = appendString + val;
	}

	return array;
}
