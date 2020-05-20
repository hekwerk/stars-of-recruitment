import fetch from 'node-fetch'

const LinkedInAPIUrl = process.env.LINKEDIN_API_URL

export class LinkedInAPI {
  private accessToken: string = ''

  init(accessToken: string): LinkedInAPI {
    this.accessToken = accessToken
    return this
  }

  request(method: string, uri: string) {
    const url = `${LinkedInAPIUrl}${uri}`
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken}`
      }
    }).then((res) => res.json())
  }
}

export default new LinkedInAPI()
