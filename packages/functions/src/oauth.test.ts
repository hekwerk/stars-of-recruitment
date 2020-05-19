import { app } from './oauth';

import express from 'express'
import request from 'supertest'

const rootFn = '/.netlify/functions/oauth'

describe('oauth', () => {
  it('should redirect when /auth is called', async done => {
    const callbackUrl = process.env['OAUTH_CALLBACK']
    const res = await request(app)
    .get(`${rootFn}/auth`)
    .send();
    expect(res.status).toEqual(302)
    expect(res.header.location).toContain(encodeURIComponent(callbackUrl))
    done()
  })

  it('should return error if code is missing', async done => {
    const res = await request(app)
    .get(`${rootFn}/callback`)
    .send();

    expect(res.status).toEqual(400)
    expect(res.text).toContain('Invalid code')
    done()
  })
})