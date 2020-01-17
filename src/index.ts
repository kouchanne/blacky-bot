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

const authentication = (req: Request): void => {
  console.log('認証チェック')
  console.log(req)
}

const handleEvent = (event: any) => {
  console.log(event)
}

export const webhook = async (req: Request, res: Response): Promise<void> => {
  console.log('ブラッキーアプリ')
  await authentication(req)
  await req.body.events.map(handleEvent)
  res.status(200).send('ブラッキーアプリ')
}

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET || ''
}
