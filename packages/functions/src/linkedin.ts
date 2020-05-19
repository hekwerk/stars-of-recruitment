import './dotenv';

const LinkedInRestClient = require('node-linkedin-v2')

const callbackUrl = process.env.OAUTH_CALLBACK
const linkedInClientId = process.env.LINKEDIN_CLIENT_ID
const linkedInClientSecret = process.env.LINKEDIN_CLIENT_SECRET

const handler: AWSLambda.Handler = async (event, _context, callback) => {
  const accessToken = event?.headers?.accesstoken

  if (!accessToken) {
    callback(null, { statusCode: 400, body: 'Invalid access token' })
  } else {
    const Linkedin = new LinkedInRestClient(
      linkedInClientId,
      linkedInClientSecret,
      callbackUrl
    )
    try {
      const result = await Linkedin.getCurrentMemberProfile(['id'], accessToken)
      callback(null, { statusCode: 200, body: JSON.stringify(result) })
    } catch (err) {
      callback(null, {
        statusCode: err?.status || 400,
        body: err?.message || 'Unknown error'
      })
    }
  }
}

export { handler }
