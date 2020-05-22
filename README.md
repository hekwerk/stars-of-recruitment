# Stars of Recruitment

### Install
1. run `npm install`

### Dev
1. copy `.env.sample` to `.env` and set variables
1. run `npm run dev`

functions are available at 'http://localhost:9000/.netlify/functions/...'  
client is available at 'http://localhost:9000'

### Build
1. run `npm run build`

### LinkedIn OAuth
1. Go to `http://localhost:9000/.netlify/functions/oauth/auth`
2. Give permission in Linked in oAuth screen
3. If everything went well the url set by `OAUTH_CLIENT_AUTHORIZE` will be called with `?ta=ACCESS_TOKEN`

### LinkedIn API
The LinkedIn-API can be used at `http://localhost:9000/.netlify/functions/linkedin/...`. Provide the access token above as Bearer token.

## Client
...

## Cleanup
1. run `npm run clean`

# Credits
Sven Siertsema (https://github.com/SSiertsema)  
Richard van Zon (https://github.com/rvanzon)
Dave Ligthart (https://github.com/dligthart)
