export {};
const browserObject = require('./utils/browser');
const utilsParse = require('./utils/parse');
const csvWriter = require('./utils/csvWriter');

const discover = async () => {
  const startTime = new Date().getTime();

  const category = (process.argv[3] == undefined ? '' : process.argv[3])
  const type = (process.argv[2] == undefined ? '' : process.argv[2])
  let marketplaceUrl = `https://github.com/marketplace?category=${category}&query=&type=${type}&verification=`;

  let browser = await browserObject.startBrowser();
  let page = await browser.newPage();
  console.log(`// Navigating to ${marketplaceUrl}...`);
  await page.goto(marketplaceUrl);

  let moreResults = true;
  const apps: any = [];

  console.log(`// Parse content...`);
  while (moreResults) {
    await page.waitForSelector('.paginate-container .pagination');
    const newApps = await utilsParse.searchMarketplaceItems(page);

    apps.push(...newApps);

    try {
      await page.click('.paginate-container .pagination a[rel=\'next\']');
    } catch (error) {
      moreResults = false;
    }
  }

  console.log(`// Closing browser`);
  await browser.close();

  const timeSpent = ((new Date().getTime()) - startTime) / 1000;
  console.log(`// Completed in  ${timeSpent} secs!`);

  console.log(`Total of ${apps.length} apps.`);
  csvWriter.toCSV(apps);
  // outputApps(apps);
};

const outputApps = (apps: any) => {
  if (apps.length) {
    console.log(`apps: \n${JSON.stringify(apps, null, 2)}`);
  } else {
    console.log('No apps found!');
  }
};

discover()