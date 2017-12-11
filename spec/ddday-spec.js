var ddday = require('../index');

describe('#Testing Suite for ddday package', function() {
	describe("Testing a single digit day", function () {
		var d = new Date();
		beforeEach(function () {
			d.setDate(9);
		});

		it('should add a zero in front', function() {
			expect(ddday(d.getDate())).toEqual('09');
		});
	});

	describe("Testing a double digit day", function () {
		var d = new Date();
		beforeEach(function () {
			d.setDate(19);
		});

		it('should leave it as it was', function() {
			expect(ddday(d.getDate())).toEqual('19');
		});
	});
});


