'use strict';
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-1'});

exports.handler = (event, context, callback) => {
    console.log('function2'); 
};
