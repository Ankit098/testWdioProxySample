const axiosDefaultConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
  proxy: false
};

const axios = require('axios').create(axiosDefaultConfig)

const axiosGetCall = async () => {
  axios
    .get('11')
    .then(function (response) {
      console.log(
        'Response with axios was ok: ' + response.status
      );
    })
    .catch(function (error) {
      console.log('axios error')
      console.log(error);
    });
}

describe("no axios proxy", () => {
  it("it uses global agent", async () => {
    await browser.url("https://bstackdemo.com/");
    console.log('making axios call')
    await axiosGetCall()
    await browser.waitUntil(
      async () => (await browser.getTitle()).match(/StackDemo/i),
      5000,
      "Title didn't match with BrowserStack"
    );
  });
})
