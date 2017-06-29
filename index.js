/**
 * TODO...
 */

const switchValue = function switchValue (array, indexA, indexB) {
	const clone = array.slice(0);

	clone[indexA] = array[indexB];
	clone[indexB] = array[indexA];

	return clone;
}

const extractPivot = function extractPivot(array, first, last) {
	return first;
}

const partition = function partition(array, firstIndex, lastIndex, pivotIndex) {
	var clone = switchValue(array, pivotIndex, lastIndex),
		partitionIndex = firstIndex,
		tmpValue;

	for (let i = firstIndex; i < lastIndex; i++) {
		if (clone[i] <= clone[lastIndex]) {
			clone = switchValue(array, i, partitionIndex);

			partitionIndex++;
		}
	}
	clone = switchValue(array, lastIndex, partitionIndex);

	return partitionIndex;
};

const generator = function* generator(array, first, last) {
	var firstIndex = first || 0,
		lastIndex = last || array.length - 1,
		pivotIndex;

	if (firstIndex < lastIndex) {
		pivotIndex = extractPivot(array, firstIndex, lastIndex);
		pivotIndex = partition(array, firstIndex, lastIndex, pivotIndex);

		generator(array, firstIndex, pivotIndex - 1);
		generator(array, pivotIndex + 1, lastIndex);
	}
}

module.exports = class QuickSort {
	constructor(array, pivot) {
		this._array = array;
		this._pivot = pivot; // TODO Use a random pivot if undefined;
		this._steps = [];
	}

	compute() {
		const genObj = generator(this._array);

		this._steps = [...genObj];
	}

	next() {
		if (!this._genObj) {
			this._genObj = generator(this._array);
		}

		return this._genObj.next();
	}

	getStep(no) {
		return this._steps[no];
	}

	get array() {
		return this._array;
	}

	get result() {
		const lastStep = this._steps[this._steps.length - 1];

		return lastStep ? lastStep.array : undefined;
	}

	get steps() {
		return this._steps;
	}
};
