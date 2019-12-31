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
const OAuth = require("oauth");
const weatherResult = {
    get: (data) => {
        return new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
            let header = {
                "X-Yahoo-App-Id": "pHYU6F4m"
            };
            let request = new OAuth.OAuth(null, null, "dj0yJmk9Wm9IUFdxdlRNRExtJmQ9WVdrOWNFaFpWVFpHTkcwbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTAz", "da378f7b398749bc0db7f38f43eb9a0d5ac91221", "1.0", null, "HMAC-SHA1", null, header);
            request.get(`https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${data.city}&format=json`, null, null, 
            //@ts-ignore
            function (err, data, result) {
                if (err) {
                    return resolve(err);
                }
                else {
                    return resolve(data);
                }
            });
        }));
    }
};
exports.default = weatherResult;
