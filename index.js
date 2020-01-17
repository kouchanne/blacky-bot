"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook = (req, res) => {
    console.log("ブラッキーアプリ");
    res.status(200).send("ブラッキーアプリ");
};
// create LINE SDK config from env variables
const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
    channelSecret: process.env.CHANNEL_SECRET || ''
};
