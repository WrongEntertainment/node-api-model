/**
 * The Api model class.
 */
function ApiModel() {
  // The object storage.
  this.obj = {
    meta: {
      name: 'ApiModel',
      version: '0.0.0',
      code: 200,
      status: 'ok'
    },
    response: {
    }
  };
}

module.exports = ApiModel;

/**
 * Get the whole model.
 * 
 * @param  {Object} data    The data you want to response.
 * @param  {Object} options The meta options.
 * @return {Object}         The model object.
 */
ApiModel.prototype.getObj = function(data, options) {
  this.obj.response = data;
  return this.obj;
};

/**
 * Get the meta object.
 * 
 * @return {Object} The meta object.
 */
ApiModel.prototype.getMeta = function() {
  return this.obj.meta;
};

/**
 * Set the meta object parameter.
 * 
 * @param  {Object} options The meta parameter.
 * @return {Object}         The meta object.
 */
ApiModel.prototype.setMeta = function(options) {
  if (options !== undefined) {

    if (options.name !== undefined)
      this.obj.meta.name = options.name;
    
    if (options.version !== undefined)
      this.obj.meta.version = options.version;
    
    if (options.code !== undefined)
      this.obj.meta.code = options.code;
    
    if (options.status !== undefined)
      this.obj.meta.status = options.status;
  }
  return this.obj.meta;
};

/**
 * Get the response object.
 * 
 * @return {Object} The response object.
 */
ApiModel.prototype.getResponse = function() {
  return this.obj.response;
};

/**
 * Set the response object.
 *
 * @param  {Object} data The data we want to response.
 * @return {Object}      The meta object.
 */
ApiModel.prototype.setResponse = function(data) {
  return this.obj.meta;
};
