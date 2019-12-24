import {
  // main APIs
  Client,
  middleware,

  // exceptions
  JSONParseError,
  SignatureValidationFailed,

  // types
  TemplateMessage,
  WebhookEvent
} from '@line/bot-sdk'

import { Request, Response } from 'express'

export const webhook = (_: Request, res: Response) => {
  try {
    res.status(200)
    res.send('Hello World')
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET || ''
}
