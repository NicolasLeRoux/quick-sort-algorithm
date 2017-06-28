/**
 * TODO...
 */

const switchValue = function switchValue (array, indexA, indexB) {
	const clone = array.slice(0);

	clone[indexA] = array[indexB];
	clone[indexB] = array[indexA];

	return clone;
}

const partition = function partition(array, firstIndex, lastIndex, pivotIndex) {
	var clone = switchValue(array, pivotIndex, lastIndex),
		partitionIndex, tmpValue;

	for (let i = firstIndex; i < lastIndex; i++) {
		if (clone[i] <= clone[lastIndex]) {
			clone = switchValue(array, i, partitionIndex);

			partitionIndex++;
		}
	}

	return partitionIndex;
};

const generator = function* generator(array, pivot) {
	// TODO
	/*
	si premier < dernier alors
		pivot := choix_pivot(T, premier, dernier)
		pivot := partitionner(T, premier, dernier, pivot)
		tri_rapide(T, premier, pivot-1)
		tri_rapide(T, pivot+1, dernier)
	fin si
	*/
}

module.exports = class QuickSort {
	constructor(array, pivot) {
		this._array = array;
		this._pivot = pivot; // TODO Use a random pivot if undefined;
		this._steps = [];
	}

	compute() {
		const genObj = generator(this._array, this._pivot);

		this._steps = [...genObj];
	}

	next() {
		if (!this._genObj) {
			this._genObj = generator(this._array, this._pivot);
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
