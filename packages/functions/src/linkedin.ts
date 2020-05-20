require('babel-polyfill');

import './dotenv';

import express from 'express';
import serverless from 'serverless-http';
import LinkedInAPI from './linkedin-api';

const app: express.Application = express();

const router = express.Router();

/**
 * Middleware that injects the LinkedIn-API using provided access token [at]
 *  @param {Express.Request} req
 *  @param {Express.Response} res
 */
app.use(async (req: express.Request, res: express.Response, next) => {
  const accessToken = req?.headers['at'] as string;

  // TODO: oAuth AccessToken is used now, we need an internal access token that
  // translates to the oAuth token, to keep it secret

  if (!accessToken) {
    res.status(400).send('Token error');
  } else {
    res.app.set('linkedin', LinkedInAPI.init(accessToken));
    next();
  }
})

router.get('/me', async (req: express.Request, res: express.Response) => {
  const linkedin = req.app.get('linkedin')

  try {
    const result = await linkedin.request('get', '/me');
    res.send(result);
  }
  catch (err) {
    console.log(err)
    res.status(err.status).send(err.message);
  }
});

app.use('/.netlify/functions/linkedin', router);

const handler: AWSLambda.Handler = serverless(app);
export { handler, router, app };
