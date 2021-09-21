const browserObject = require('./browser');
const scraperController = require('./pageController');
const Entity = require('./models/entity');

// Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();
const scrape = async () => {
  let data = await scraperController(browserInstance);
  const key = process.argv[3]

  if (key == undefined) {
    console.log(`data: ${JSON.stringify(data, null, 2)}`);
  } else {
    const entity = new Entity(data);
    console.log(`${key}: ${entity.name}`);
  }
};

scrape()