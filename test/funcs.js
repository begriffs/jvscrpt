var j    = require('../module'),
  chai   = require('chai'),
  expect = chai.expect,
  sinon  = require('sinon');

describe('Jvscrpt', function() {
  var inc = function (i) { return i+1; };
  describe('comp', function() {
    it('applies the second argument, then the first', function() {
      var square = function (i) { return i*i; };
      expect(j.comp(inc, square)(2)).to.equal(5);
    });
    it('composes more than two functions', function() {
      expect(j.comp(inc, inc, inc)(1)).to.equal(4);
    });
  });
  describe('flip', function() {
    it('flips just the first two arguments to a function', function() {
      var f = sinon.spy();
      j.flip(f)(1,2,3);

      expect(f.calledWith(2,1,3)).to.be.ok;
    });
  });
});
