'use strict';

module.exports.hello = (event, context, callback) => {

function getRail() {
    const got = require('got');
	var rail = got('test-eu.dazn.com/misl/v1/Rail?$format=json&id=Scheduled&LanguageCode=en&Country=de&Params=PageType:Home;ContentType:None;TestMode:True', { json: true }).then(response => {
	return response.body;  
}).catch(error => {
  console.log(error.response.body);
  return null;
});
   return rail;
}

	console.log(getRail());
	
  const response2 = {
    statusCode: 200,
    body: "xxx"
  };

  callback(null, response2);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.rail = (event, context, callback) => {
	
	const got = require('got');
	var rail = got('test-eu.dazn.com/misl/v1/Rail?$format=json&id=Scheduled&LanguageCode=en&Country=de&Params=PageType:Home;ContentType:None;TestMode:True', { json: true }).then(response => {
	return response.body;  
}).catch(error => {
  console.log(error.response.body);
  return null;
});

	rail.then(function(result) {
			const response2 = {
			statusCode: 200,
			body: result
		  };

		callback(null, response2);
	})
	
	
	
};