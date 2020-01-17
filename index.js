"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook = (req, res) => {
    console.log("ブラッキーアプリ");
    authentication(req);
    res.status(200).send("ブラッキーアプリ");
};
// create LINE SDK config from env variables
const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
    channelSecret: process.env.CHANNEL_SECRET || ''
};
/*
 * リクエスト元がLINE APIかどうかチェックする
*/
const authentication = (req) => {
    console.log("認証チェック");
    console.log(req);
};
