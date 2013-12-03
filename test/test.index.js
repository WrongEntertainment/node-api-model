var assert = require('assert');
var ApiModel = require('../src');


describe('test "src/index.js" routes', function() {

  describe('getMeta()', function() {
    it('should return the meta object.', function() {
      var model = new ApiModel();
      var actual = model.getMeta();
      var expected = {
        name: 'ApiModel',
        version: '0.0.0',
        code: 200,
        status: 'ok'
      };
      assert.deepEqual(expected, actual);
    });
  });

  describe('setMeta()', function() {
    it('set the name and return the meta object.', function() {
      var model = new ApiModel();
      model.setMeta({name:'test'});
      var expected = {
        name: 'test',
        version: '0.0.0',
        code: 200,
        status: 'ok'
      };
      assert.deepEqual(expected, model.obj.meta);
    });

    it('set the version and return the meta object.', function() {
      var model = new ApiModel();
      model.setMeta({version:'1.0.0'});
      var expected = {
        name: 'ApiModel',
        version: '1.0.0',
        code: 200,
        status: 'ok'
      };
      assert.deepEqual(expected, model.obj.meta);
    });

    it('set the code and return the meta object.', function() {
      var model = new ApiModel();
      model.setMeta({code:404});
      var expected = {
        name: 'ApiModel',
        version: '0.0.0',
        code: 404,
        status: 'ok'
      };
      assert.deepEqual(expected, model.obj.meta);
    });

    it('set the status and return the meta object.', function() {
      var model = new ApiModel();
      model.setMeta({status:'some special status code.'});
      var expected = {
        name: 'ApiModel',
        version: '0.0.0',
        code: 200,
        status: 'some special status code.'
      };
      assert.deepEqual(expected, model.obj.meta);
    });
  });
  
  describe('getObj()', function() {
    it('should return the whole object.', function() {
      var model = new ApiModel();
      var actual = model.getObj('foo');
      var expected = {
        meta: {
          name: 'ApiModel',
          version: '0.0.0',
          code: 200,
          status: 'ok'
        },
        response: 'foo'
      };
      assert.deepEqual(expected, actual);
    });
    it('should return the whole object.', function() {
      var model = new ApiModel();
      var actual = model.getObj({param1: 'foo', param2: 'bar'});
      var expected = {
        meta: {
          name: 'ApiModel',
          version: '0.0.0',
          code: 200,
          status: 'ok'
        },
        response: {
          param1: 'foo',
          param2: 'bar'
        }
      };
      assert.deepEqual(expected, actual);
    });
  });

})
