const browserObject = require('./utils/browser');
const Entity = require('./models/entity');
const pageScraper = require('./utils/pageScraper');

const scrape = async () => {
  // Start the browser and create a browser instance
  let browser = await browserObject.startBrowser();
  let data = await pageScraper.scraper(browser);

  const key = process.argv[3]
  if (key == undefined) {
    console.log(`Data: ${JSON.stringify(data, null, 2)}`);
  } else {
    const entity = new Entity(data);
    console.log(`${key}: ${entity.name}`);
  }
};

scrape()