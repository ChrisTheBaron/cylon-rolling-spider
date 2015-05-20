'use strict';

var Cylon = require("cylon");
var RollingSpider = source("adaptor");

describe("Cylon.Adaptors.RollingSpider", function () {
	var adaptor;

  it("is a subclass of Cylon.Adaptor", function() {
  	adaptor = new RollingSpider();
    expect(adaptor).to.be.an.instanceOf(RollingSpider);
    expect(adaptor).to.be.an.instanceOf(Cylon.Adaptor);
  });

	describe("when not passed a UUID", function () {
	  beforeEach(function() {
	    adaptor = new RollingSpider();
	  });

	  describe("#constructor", function() {
	    it("@uuid is null", function() {
	      expect(adaptor.uuid).to.be.null;
	    });
	  });
	});

	describe("when passed a UUID", function () {
	  beforeEach(function() {
	    adaptor = new RollingSpider({
	      uuid: "uuid",
	    });
	  });

	  describe("#constructor", function() {
	    it("sets @uuid to the provided UUID", function() {
	      expect(adaptor.uuid).to.be.eql("uuid");
	    });
	  });
	});
});
