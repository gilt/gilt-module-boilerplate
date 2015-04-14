(function() {

  var chai = require('chai');
  var sinon = require('sinon');
  var should = chai.should();
  var sinonSandbox;

  describe('this module ', function () {

    beforeEach(function () {
        sinonSandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sinonSandbox.restore();
    });

    describe('testing ', function () {

      it('true should be true', function () {
        // sinonSandbox.stub(app, 'yourCodeHere').returns(true);
        true.should.be.true;
      });
    });
  });

})();
