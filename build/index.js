"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook = (_, res) => {
    try {
        res.status(200);
        res.send('Hello World');
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
};
// create LINE SDK config from env variables
const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
    channelSecret: process.env.CHANNEL_SECRET || ''
};
