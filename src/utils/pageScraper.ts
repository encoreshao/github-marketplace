const utilsParse = require("./parse");

const scraperObject = {
  url: "https://github.com/marketplace/" + process.argv[2],
  async scraper(browser: any) {
    const startTime = new Date().getTime();
    let page = await browser.newPage();
    console.log(`// Navigating to ${this.url}...`);
    await page.goto(this.url, { waitUntil: "networkidle2", timeout: 3000000 });

    console.log(`// Parse content...`);
    let data = await utilsParse.extractPageContent(page);

    console.log(`// Closing browser.`);
    await browser.close();

    const timeSpent = (new Date().getTime() - startTime) / 1000;
    console.log(`// Completed in  ${timeSpent} secs!`);
    return data;
  },
};

module.exports = scraperObject;
