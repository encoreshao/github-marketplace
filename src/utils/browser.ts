export {};
const puppeteer = require("puppeteer");

async function startBrowser() {
  let browser: any;
  try {
    console.log(`Opening the browser......`);

    browser = await puppeteer.launch({
      headless: false,
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
  } catch (err: any) {
    console.log(`// Could not create a browser instance: ${err.message}`);
  }
  return browser;
}

module.exports = { puppeteer, startBrowser };
