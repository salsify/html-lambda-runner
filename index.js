'use strict';

const AWS = require('aws-sdk');
const fs = require('fs');
const render = require('./render');
const project = require('./project');

let run = (event, context, callback) => {
  const awsConfig = require(project.path('config/aws-config'));
  let kms = new AWS.KMS({region: awsConfig.region});

  let encConfig = fs.readFileSync('config/config.json.enc');

  kms.decrypt({ CiphertextBlob: encConfig }, (err, data) => {
    if (err) context.fail(err);

    let rawLambdaConfig = data['Plaintext'].toString();
    let lambdaConfig = JSON.parse(rawLambdaConfig);

    if (event.accessKey == lambdaConfig.lambdaAccessKey) {
      context.succeed(render(context, event));
    } else {
      context.fail('Invalid access key');
    }
  });
};

module.exports = {
  run: run,
  render: render
};