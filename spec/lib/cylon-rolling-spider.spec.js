"use strict";

var module = source("../index");

var Adaptor = source('adaptor'),
	Driver = source('driver');

describe("Cylon.RollingSpider", function () {
	describe("#adaptors", function () {
		it('is an array of supplied adaptors', function () {
			expect(module.adaptors).to.be.eql(['rolling-spider']);
		});
	});

	describe("#drivers", function () {
		it('is an array of supplied drivers', function () {
			expect(module.drivers).to.be.eql(['rolling-spider']);
		});
	});

	describe("#dependencies", function () {
		it('is an array of supplied dependencies', function () {
			expect(module.dependencies).to.be.eql([]);
		});
	});

	describe("#driver", function () {
		it("returns an instance of the Driver", function () {
			expect(module.driver()).to.be.instanceOf(Driver);
		});
	});

	describe("#adaptor", function () {
		it("returns an instance of the Adaptor", function () {
			expect(module.adaptor()).to.be.instanceOf(Adaptor);
		});
	});
});
