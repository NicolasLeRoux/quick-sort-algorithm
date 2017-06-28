var chai = require('chai'),
	expect = chai.expect,
	Sort = require('./');

chai.should();

describe("The instanciation (without computation) of the sort object,", function () {
	var sort,
		array = [3, 1, 6, 2, 5, 4];

	beforeEach(function () {
		sort = new Sort(array, 0);
	});

	it("Should not have any result before computation.", function () {
		expect(sort.result).to.be.undefined;
	});

	it("Should not have any step define before computation.", function () {
		sort.steps.should.deep.equal([]);
	});
});

describe("The instanciation (with computation) of the sort object,", function () {
	var sort,
		array = [3, 1, 6, 2, 5, 4];

	beforeEach(function () {
		sort = new Sort(array, 0);
		sort.compute();
		console.log(sort.steps);
	});

	it("Should ...", function () {
		expect(sort.result).to.be.undefined;
	});
});
