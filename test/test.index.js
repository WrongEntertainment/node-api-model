var assert = require('assert');
var ApiModel = require('../src');


describe('test "src/index.js" routes', function() {

  describe('getStore()', function() {
    it('should return the whole store object.', function() {
      var model = new ApiModel();
      var expected = {
        meta: {
          code: 200,
          status: 'ok'
        },
        data: {}
      };
      assert.deepEqual(expected, model.getStore() );
    });
  });

  describe('setStore()', function() {
    it('set the store and should return the whole object.', function() {
      var model = new ApiModel();
      model.setStore({foo: 'bar'});
      var expected = {
        foo: 'bar'
      };
      assert.deepEqual(expected, model.getStore() );
    });
  });

  describe('getMeta()', function() {
    it('should return the meta object.', function() {
      var model = new ApiModel();
      var actual = model.getMeta();
      var expected = {
        code: 200,
        status: 'ok'
      };
      assert.deepEqual(expected, actual);
    });
  });

  describe('setMeta()', function() {
    it('set the meta object and return it.', function() {
      var model = new ApiModel();
      var actual = model.setMeta({foo: 'bar'});
      var expected = {
        foo: 'bar'
      };
      assert.deepEqual(expected, model.getMeta() );
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
      var expected = {
        code: 404,
        status: 'ok'
      };
      assert.deepEqual(expected, model.store.meta);
    });
  });

  describe('getMetaStatus()', function() {
    it('should return the meta status.', function() {
      var model = new ApiModel();
      assert.deepEqual(200, model.getMetaCode());
    });
  }); 

  describe('setMetaStatus()', function() {
    it('set the meta status and return the value.', function() {
      var model = new ApiModel();
      model.setMetaStatus('some special status code.');
      assert.deepEqual( 'some special status code.', model.getMetaStatus() );
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


});
