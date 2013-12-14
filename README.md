# api-model v0.2.0
WIP minimalistic api json model.  


## General Information
Create a javascript object to use at your restful api.  

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

A simple object with two main subobjects. One `meta` and one `data`.  

**meta**  
The meta object will be filled by `express`, `restify` or an other http server module.

**data**  
With the data object you can do anything.


## How to use
Simple example how to use the api-model at a route.  
Include the module and set the different keys like this:

```
var ApiModel = require('api-model');


function pingRoute(req, res) {
  var apiModel = new ApiModel();
  
  // set the api model meta data.
  apiModel.setMetaCode(res.statusCode);
  apiModel.setMetaStatus();
  
  // Set the data you want to response.
  apiModel.setData({
    foo: 'FOO',
    bar: {
      baz: 'BAZ'
    }
  });
  
  // response and return the object.
  res.json(apiModel.getStore());
}
```
