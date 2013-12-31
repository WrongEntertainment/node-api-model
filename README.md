# api-model v0.2.1 [![Build Status](https://travis-ci.org/WrongEntertainment/node-api-model.png?branch=master)](https://travis-ci.org/WrongEntertainment/node-api-model)
WIP minimalistic api json model.  


## General Information
Create a javascript object to use with your restful api.  

The base model looks like this:

```
{
  meta: {
    code: 200
    status: 'ok'
  },
  data: {
  
  }
}
```

A simple object with two main subobjects – `meta` and – `data`.  

**meta**  
The meta object will be filled by [express](https://github.com/visionmedia/express), [restify](https://github.com/mcavage/node-restify) or an other http server module.

**data**  
With the data object you can do anything.


## How to use
Simple example on how to use the api-model at a route.  
Include the module and set the different keys like this:

```
var ApiModel = require('api-model');


function sampleRoute(req, res) {
  var apiModel = new ApiModel(res);
  
  // set the data you want to respond
  apiModel.setData('some data here');
  
  // return the object
  res.json(apiModel.getStore());
}
```

In this example we set the status code manually.

```
var ApiModel = require('api-model');


function sampleRoute(req, res) {
  var apiModel = new ApiModel();
  
  // set status code and status
  apiModel.setMetaCode(res.statusCode);
  apiModel.setMetaStatus();
  
  // set the data you want to respond
  apiModel.setData({
    foo: 'FOO',
    bar: {
      baz: 'BAZ'
    }
  });
  
  // return the object
  res.json(apiModel.getStore());
}
```
