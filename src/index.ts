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
  console.log("ブラッキーアプリ")
  res.status(200).send("ブラッキーアプリ")
}

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET || ''
}
