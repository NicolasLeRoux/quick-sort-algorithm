/**
 * TODO...
 */

const utils = require('./utils.js');

const extractPivot = function extractPivot(array, first, last) {
	return first; // TODO Randomize this...
}

const partition = function partition(array, firstIndex, lastIndex, pivotIndex) {
	var clone = utils.switchValue(array, pivotIndex, lastIndex),
		partitionIndex = firstIndex,
		tmpValue;

	for (let i = firstIndex; i < lastIndex; i++) {
		if (clone[i] <= clone[lastIndex]) {
			clone = utils.switchValue(clone, i, partitionIndex);

			partitionIndex++;
		}
	}
	clone = utils.switchValue(clone, lastIndex, partitionIndex);

	return {
		array: clone,
		index: partitionIndex
	};
};

const generator = function* generator(array, first, last) {
	var firstIndex = first || 0,
		lastIndex = last || array.length - 1,
		clone = array.slice(0),
		tmp,
		pivotIndex;

	if (firstIndex < lastIndex) {
		pivotIndex = extractPivot(array, firstIndex, lastIndex);
		tmp = partition(array, firstIndex, lastIndex, pivotIndex); // TODO Dirty...
		pivotIndex = tmp.index;
		clone = tmp.array;

		console.log("Index: ", firstIndex, lastIndex);
		console.log("Left partition: ", clone, firstIndex, pivotIndex - 1);
		console.log("Right partition: ", clone, pivotIndex + 1, lastIndex);
		yield *generator(clone, firstIndex, pivotIndex - 1);
		yield *generator(clone, pivotIndex + 1, lastIndex);
	}

	yield {
		array: clone
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
