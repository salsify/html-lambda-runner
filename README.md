# html-**λ**-runner

A simple Node library for running HTML generating Lambda functions with Amazons Lambda service.

Supports basic templating with `lodash` template and key based authentication with an `accessKey` GET parameter. Uses Amazon Key Store to encrypt configuration files and keep the `accessKey` safe.

Usually, this library is used with [html-lambda-cli](https://github.com/salsify/html-lambda-cli) for quick setup and publishing.
