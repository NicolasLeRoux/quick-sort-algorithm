/**
 * TODO...
 */

const generator = function* generator(array, pivot) {
	const clone = array.slice(0),
		tmpIndex = 0; // TODO: Find proper name for this index

	for (let i = 0, iLength = clone.length - 1; i < iLength; i++) {
		if (clone[i] <= clone[iLength - 1]) {
			// TODO The switch should be done in another place
			var tmp = clone[i];
			clone[i] = clone[tmpIndex];
			clone[tmpIndex] = tmp;

			tmpIndex++;

			yield {
				array: clone.slice(0),
				selected: tmpIndex // What is realy needed to the display...
			};
		}
	}
};


module.exports = class QuickSort {
	constructor(array, pivot) {
		this._array = array;
		this._pivot = pivot; // TODO Use a random pivot if undefined;
		this._steps = [];
	}

	next() { // TODO
		return null;
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
