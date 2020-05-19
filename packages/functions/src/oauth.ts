require('babel-polyfill');

import './dotenv';

import express from 'express';
import serverless from 'serverless-http';
import simpleOauth2 from 'simple-oauth2';

const app: express.Application = express();

const callbackUrl = process.env.OAUTH_CALLBACK
const defaultState =
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

const oauthLinkedin = simpleOauth2.create({
  client: {
    id: process.env.LINKEDIN_CLIENT_ID,
    secret: process.env.LINKEDIN_CLIENT_SECRET
  },
  auth: {
    tokenHost: process.env.LINKEDIN_TOKENHOST,
    authorizeHost: process.env.LINKEDIN_AUTHORIZE_HOST,
    tokenPath: process.env.LINKEDIN_TOKEN_PATH,
    authorizePath: process.env.LINKEDIN_AUTHORIZE_PATH
  },
  options: {
    authorizationMethod: 'body'
  }
});

const authorizationUri = oauthLinkedin.authorizationCode.authorizeURL({
  redirect_uri: callbackUrl,
  scope: process.env.LINKEDIN_SCOPE,
  state: defaultState
});

const router = express.Router();

router.get('/auth', (_req: express.Request, res: express.Response) => {
  res.redirect(authorizationUri)
});

router.get('/callback', async (req: express.Request, res: express.Response) => {
  const { code } = req.query as { code: simpleOauth2.AuthorizationCode };

  if (!code) {
    return res.status(400).send('Invalid code')
  };

  const options: simpleOauth2.AuthorizationTokenConfig = {
    code,
    redirect_uri: callbackUrl
  };

  try {
    const token = await oauthLinkedin.authorizationCode.getToken(options);
    const accessToken = oauthLinkedin.accessToken.create(token);
    const oauthClientAuthorize = process.env.OAUTH_CLIENT_AUTHORIZE;

    // TODO: save this to database and give back an internal ID instead
    const at = accessToken.token['access_token']
    return res.redirect(`http://localhost:3000/api/oauth2/authorize?at=${at}`);
  } catch (error) {
    const errorCode = error?.output?.statusCode ?? 500
    const message = error?.output?.payload?.message ?? 'Authentication failed'
    return res.status(errorCode).json(message)
  }
})

app.use('/.netlify/functions/oauth', router)

const handler: AWSLambda.Handler = serverless(app)
export { handler, router, app }
