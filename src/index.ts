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

export const webhook = (req: Request, res: Response) => {
  console.log("ブラッキーアプリ")
  authentication(req)
  res.status(200).send("ブラッキーアプリ")
}

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET || ''
}

/*
 * リクエスト元がLINE APIかどうかチェックする
*/
const authentication = (req: Request) => {
  console.log("認証チェック")
  console.log(req)

}
