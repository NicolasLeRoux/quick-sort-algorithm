/**
 * TODO...
 */

const switchValue = function switchValue (array, indexA, indexB) {
	const clone = array.slice(0);

	clone[indexA] = array[indexB];
	clone[indexB] = array[indexA];

	return clone;
}

module.exports = {
	switchValue: switchValue
};
