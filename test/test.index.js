var assert = require('assert');
var ApiModel = require('../src');


describe('src/index.js', function() {

  describe('getStore()', function() {
    it('should return the whole store object.', function() {
      var model = new ApiModel();
      var expected = {
        meta: {
          code: 200,
          status: 'OK'
        },
        data: {}
      };
      assert.deepEqual(expected, model.getStore());
    });
  });

  describe('setStore()', function() {
    it('set the store and should return the whole object.', function() {
      var model = new ApiModel();
      model.setStore({foo: 'bar'});
      var expected = {
        foo: 'bar'
      };
      assert.deepEqual(expected, model.getStore());
    });
  });

  describe('getMeta()', function() {
    it('should return the meta object.', function() {
      var model = new ApiModel();
      var expected = {
        code: 200,
        status: 'OK'
      };
      assert.deepEqual(expected, model.getMeta());
    });
  });

  describe('setMeta()', function() {
    it('set the meta object and return it.', function() {
      var model = new ApiModel();
      model.setMeta({foo: 'bar'});
      var expected = {
        foo: 'bar'
      };
      assert.deepEqual(expected, model.getMeta());
    });
  });

  describe('getMetaCode()', function() {
    it('should return the meta code.', function() {
      var model = new ApiModel();
      assert.deepEqual(200, model.getMetaCode());
    });
  });

  describe('setMetaCode()', function() {
    it('set the code and return the value.', function() {
      var model = new ApiModel();
      model.setMetaCode(404);
      assert.deepEqual(404, model.getMetaCode());
    });
  });

  describe('getMetaStatus()', function() {
    it('should return the meta status.', function() {
      var model = new ApiModel();
      assert.deepEqual('OK', model.getMetaStatus());
    });
  }); 

  describe('setMetaStatus()', function() {
    it('set the meta status and return the value.', function() {
      var model = new ApiModel();
      model.setMetaStatus('some special status code.');
      assert.deepEqual( 'some special status code.', model.getMetaStatus());
    });
  }); 

  describe('getData()', function() {
    it('should return the data object.', function() {
      var model = new ApiModel();
      assert.deepEqual({}, model.getData());
    });
  });

  describe('setData()', function() {
    it('set the data and return the object.', function() {
      var model = new ApiModel();
      model.setData({
        param1: 'foo',
        param2: 'bar'
      });
      assert.deepEqual(200, model.getMetaCode());
    });
  });

  describe('error()', function() {
    it('set an error object and return the object.', function() {
      var model = new ApiModel();
      model.error({message: 'hello error', code: 1337});
      assert.deepEqual({message: 'hello error', code: 1337}, model.store.error);
    });

    it('set an error message and code and return the object.', function() {
      var model = new ApiModel();
      model.error('hello error', 1337);
      assert.deepEqual({message: 'hello error', code: 1337}, model.store.error);
    });
  });

});
