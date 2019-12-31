const OAuth = require("oauth");

const weatherResult = {
  get: (data: any): Promise<object> => {
    return new Promise(async resolve => {
      let header = {
        "X-Yahoo-App-Id": "pHYU6F4m"
      };
      let request = new OAuth.OAuth(
        null,
        null,
        "dj0yJmk9Wm9IUFdxdlRNRExtJmQ9WVdrOWNFaFpWVFpHTkcwbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTAz",
        "da378f7b398749bc0db7f38f43eb9a0d5ac91221",
        "1.0",
        null,
        "HMAC-SHA1",
        null,
        header
      );
      request.get(
        `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${data.city}&format=json`,
        null,
        null,
        //@ts-ignore
        function(err, data, result) {
          if (err) {
            return resolve(err);
          } else {
            return resolve(data);
          }
        }
      );
    });
  }
};

export default weatherResult;
