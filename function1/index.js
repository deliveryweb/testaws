'use strict';
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-1'});

exports.handler = (event, context, callback) => {
    
    // let companyId = event.companyId
    let companyId = "123xyz";
    var params = {
      TableName: 'Groups',
      KeyConditionExpression: 'companyId = :cid',
      ExpressionAttributeValues: {
        ':cid': companyId,
      }
    };
    docClient.query(params, function(err, data) {
        if(err){
            callback(err, null)
        } else {
            var items = data.Items;
            callback(err, items)
        }
    })
};
