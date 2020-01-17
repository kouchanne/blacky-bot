"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication = (req) => {
    console.log('認証チェック');
    console.log(req);
};
const handleEvent = (event) => {
    console.log(event);
};
exports.webhook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('ブラッキーアプリ');
    yield authentication(req);
    yield req.body.events.map(handleEvent);
    res.status(200).send('ブラッキーアプリ');
});
// create LINE SDK config from env variables
const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
    channelSecret: process.env.CHANNEL_SECRET || ''
};
