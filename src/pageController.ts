let pageScraper = require('./pageScraper');

async function scrapeAll(browserInstance: any){
  let data: any = {};
  try {
    let browser = await browserInstance;
    data = await pageScraper.scraper(browser);
  } catch(err: any){
    console.log(`Could not resolve the browser instance => : ${err.message}`);
  }

  return data;
}

module.exports = (browserInstance: any) => { return scrapeAll(browserInstance) }