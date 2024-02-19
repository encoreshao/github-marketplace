async function searchMarketplaceItems(page: any) {
  const newApps = await page.$$eval(
    "div.MarketplaceBody .d-md-flex.flex-wrap.mb-4 a",
    (trows: any) => {
      let rowList: any = [];
      trows.forEach((row: any) => {
        rowList.push({
          logo: row.querySelector("img") && row.querySelector("img").src,
          name: row.querySelector("h3").innerText.trim(),
          permalink: row.href.replace("https://github.com/marketplace/", ""),
          url: row.href,
          powered_by:
            row.querySelector("p:first-of-type") &&
            row
              .querySelector("p:first-of-type")
              .innerText.trim()
              .replace("By ", ""),
          short_description:
            row.querySelector("p:last-of-type") &&
            row.querySelector("p:last-of-type").innerText.trim(),
          installs:
            row.querySelector("span") &&
            row.querySelector("span").innerText.trim().replace(" installs", ""),
        });
      });
      return rowList;
    }
  );

  return newApps;
}

async function extractPageContent(page: any) {
  let data: any = {};

  data["name"] = await findItemText(page, ".f00-light.lh-condensed");
  data["url"] = await page.evaluate(() => document.location.href);
  data["verified_domains"] = await findAllItemsText(
    page,
    "ul[aria-labelledby='verified-domains-header'] li strong"
  );
  data["logo"] = await findItemSrc(page, ".CircleBadge img");
  data["verified"] = await findBooleanItem(page, "svg.octicon-verified");
  data["description"] = await findItemText(page, "div.Details");
  data["app_type"] = await findAllItemsText(
    page,
    ".py-3.lh-condensed p.topic-tag"
  );
  data["supported_languages"] = await scrapeLanguages(
    page,
    ".py-3.lh-condensed span button",
    ".py-3.lh-condensed span:nth-child(2)"
  );
  data["categories"] = await findAllItemsText(
    page,
    "ul[aria-labelledby='categories-heading'] li > a.topic-tag"
  );
  data["highlight_categories"] = await findAllItemsText(
    page,
    "ul[aria-labelledby='categories-heading'] li > a.topic-tag:not(.topic-tag-outline)"
  );
  data["customers"] = await scrapeCustomers(
    page,
    "ul[aria-labelledby='customers-header'] li a[data-hovercard-type='organization']"
  );
  data["developers"] = await scrapeDevelopers(
    page,
    "ul[aria-labelledby='developer-heading'] li a[data-hovercard-type='organization']"
  );
  data["developer_links"] = await findAllItemsURLs(
    page,
    "ul[aria-labelledby='developer-links-header'] li a"
  );
  // data['links'] = await extractLinks(page);

  return data;
}

async function extractLinks(page: any) {
  return await page.evaluate(() =>
    Array.from(document.querySelectorAll("a")).map((anchor) => [
      anchor.href,
      anchor.textContent.replace(/\n/, "").trim().replace(/\s\s+/g, " "),
    ])
  );

  // page.$$eval('a', (as: any) => as.map((a: any) => [a.textContent.replace(/\n/, '').trim().replace(/\s\s+/g, ' '), a.href]));
}

async function findAllItemsText(page: any, element: string) {
  let texts: any[] = [];
  try {
    texts = await page.$$eval(element, (items: any) =>
      items.map((item: any) =>
        item.textContent.replace(/\n/, "").trim().replace(/\s\s+/g, " ")
      )
    );
  } catch (err) {
    console.log(`// Error fetching text: ${err.message}`);
  }
  return texts;
}

async function findItemText(page: any, element: string) {
  let text = null;
  try {
    text = await page.$eval(element, (item: any) =>
      item == undefined
        ? null
        : item.textContent
            .replace(/\n/, "")
            .trim()
            .replace(/\s\s+/g, " ")
            .replace("Read more..", "")
    );
  } catch (err) {
    console.log(`// Error fetching text: ${err.message}`);
  }
  return text;
}

async function findBooleanItem(page: any, element: string) {
  let value = false;
  try {
    value = await page.$eval(element, (item: any) => item !== undefined);
  } catch (err) {
    console.log(`// Error fetching Boolean item: ${err.message}`);
  }
  return value;
}

async function findAllItemsURLs(page: any, element: string) {
  let links: any[] = [];
  try {
    links = await page.$$eval(element, (items: any) =>
      items.map((item: any) => item.href)
    );
  } catch (err) {
    console.log(`// Error fetching URLs: ${err.message}`);
  }
  return links;
}

async function scrapeLanguages(
  page: any,
  buttonElement: string,
  spanElement: string
) {
  let text = null;
  try {
    text = await page.$eval(buttonElement, (item: any) =>
      item == undefined ? null : item.getAttribute("aria-label")
    );

    if (text === null) {
      text = findItemText(page, spanElement);
    }
  } catch (err) {
    console.log(`// Error fetching languages value: ${err.message}`);
  }

  return text;
}

async function scrapeCustomers(page: any, element: string) {
  let customers: any[] = [];
  try {
    customers = await page.$$eval(element, (items: any) => {
      return items.map((item: any) => ({
        link: item.href,
        name: item.querySelector("img")["alt"],
        logo: item.querySelector("img")["src"],
      }));
    });
  } catch (err) {
    console.log(`// Error fetching customers: ${err.message}`);
  }

  return customers;
}

async function scrapeDevelopers(page: any, element: string) {
  let data_items: any[] = [];
  try {
    data_items = await page.$$eval(element, (items: any) => {
      return items.map((item: any) => ({
        link: item.href,
        name: item.innerText.replace(/\n/, "").trim(),
        logo: item.querySelector("img")["src"],
      }));
    });
  } catch (err) {
    console.log(`// Error fetching developers: ${err.message}`);
  }

  return data_items;
}

async function findItemSrc(page: any, element: string) {
  // findItemProperty(page, element, 'src')
  return await findItemProperty(page, element, "src");
}

async function findItemURL(page: any, element: string) {
  return await findItemProperty(page, element, "href");
}

async function findItemProperty(page: any, element: string, property: string) {
  let value = null;
  try {
    if (property == "href") {
      value = await page.$eval(element, (item: any) =>
        item == undefined ? null : item.href
      );
    } else if (property == "src") {
      value = await page.$eval(element, (item: any) =>
        item == undefined ? null : item.src
      );
    }
  } catch (err) {
    console.log(`// Error fetching ${property}: ${err.message}`);
  }

  return value;
}

module.exports = { searchMarketplaceItems, extractPageContent };
