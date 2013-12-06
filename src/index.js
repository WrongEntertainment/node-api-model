/**
 * The Api model class.
 *
 * Die ApiModel class ist dafür gedacht ein minimales interface für das
 * api object zur verfügung zu stellen.
 *
 * ein api model objekt tellt in der anwendung den speicher für das objekt dar.
 * Das Objekt wird mit `new` erstellt und bietet die folgenden funktionen:
 *
 * - getter/setter
 * 
 */
function ApiModel() {
  // The object storage.
  this.store = {
    meta: {
      code: 200,
      status: 'OK'
    },
    data: {
    }
  };
}

module.exports = ApiModel;


/**
 * Get the whole storage.
 * 
 * @return {Object}         The model object.
 */
ApiModel.prototype.getStore = function() {
  return this.store;
};

/**
 * Set the whole storage.
 * 
 * @param {Object} data The data you want to response.
 */
ApiModel.prototype.setStore = function(data) {
  this.store = data;
  return this.store;
};

/**
 * Get the meta object.
 * 
 * @return {Object} The meta object.
 */
ApiModel.prototype.getMeta = function() {
  return this.store.meta;
};

/**
 * Set the meta object parameter.
 * 
 * @param  {Object} meta The meta parameter.
 * @return {Object}      The meta object.
 */
ApiModel.prototype.setMeta = function(meta) {
  this.store.meta = meta;
  return this.store.meta;
};

/**
 * Get the meta code integer.
 * 
 * @return {Object} The meta code.
 */
ApiModel.prototype.getMetaCode = function() {
  return this.store.meta.code;
};

/**
 * Set the meta code integer.
 * 
 * @param {Number} The meta code.
 */
ApiModel.prototype.setMetaCode = function(code) {
  this.store.meta.code = code;
  return this.store.meta.code;
};

/**
 * Get the meta status message.
 * 
 * @return {String} The meta status.
 */
ApiModel.prototype.getMetaStatus = function() {
  return this.store.meta.status;
};

/**
 * Set the meta status message.
 * 
 * @param {String} status The meta status.
 */
ApiModel.prototype.setMetaStatus = function(status) {
  this.store.meta.status = status;
  return this.store.meta.status;
};

/**
 * Get the data object.
 * 
 * @return {Object} The data object.
 */
ApiModel.prototype.getData = function() {
  return this.store.data;
};

/**
 * Set the data object.
 *
 * @param  {Object} data The data we want to response.
 * @return {Object}      The data object.
 */
ApiModel.prototype.setData = function(data) {
  this.store.data = data;
  return this.store.data;
};
