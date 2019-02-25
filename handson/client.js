const { createClient } = require('@commercetools/sdk-client');
const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth');
const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http');
const fetch = require('node-fetch');

// TODO 1.1: centrally provide project key
const projectKey = 'new-js-training-1';

const getClient = function getClient() {
  // TODO 1.2: build and return a commercetools SDK client
  // https://commercetools.github.io/nodejs/sdk/api/sdkClient.html

  // #region SOLUTION

  // TIP: All below can be copied from Merchant Center when creating an API Client
  //    BUT: there is/was a bug that the "scopes" were not wrapped in an array in the generated code.
  //    BUT: the generated code does not yet pass a "fetch" implementation, you also have to add that.
  const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
    host: 'https://auth.commercetools.co',
    projectKey,
    credentials: {
      clientId: 'zCX76fJE97LQsgYMAcke7w2D',
      clientSecret: 'g0d5u7Jqp559DjjqUEoPzPoYWyeCbsXd',
    },
    scopes: [`manage_project:new-js-training-1`],
    fetch
  })
  const httpMiddleware = createHttpMiddleware({
    host: 'https://api.commercetools.co',
    fetch
  })
  const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
  })
  return client
  // #endregion

};
module.exports.getClient = getClient;
module.exports.projectKey = projectKey;
