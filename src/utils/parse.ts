async function extractPageContent(page: any) {
  let data: any = {};

  data['name'] = await findItemText(page, '.f00-light.lh-condensed');
  data['url'] = await page.evaluate(() => document.location.href);
  data['verified_domains'] = await findAllItemsText(page, '.marketplace-listing-details-sidebar .f6 strong');
  data['logo'] = await findItemSrc(page, '.CircleBadge img');
  data['category'] = await findItemText(page, '.text-mono.f4.color-text-tertiary');
  data['verified_info'] = await findItemText(page, '.marketplace-listing-details-sidebar .pb-3.lh-condensed');
  data['description'] = await findItemText(page, '.marketplace-listing-details-description .Details');
  data['supported_languages'] = await findItemText(page, '.marketplace-listing-details-sidebar .py-3.lh-condensed span.d-block');
  data['categories'] = await findAllItemsText(page, '.marketplace-listing-details-sidebar .pt-3.pb-3.lh-condensed > a');
  data['highlight_categories'] = await findAllItemsText(page, '.marketplace-listing-details-sidebar .pt-3.pb-3.lh-condensed > a:not(.topic-tag-outline)');
  data['customers'] = await findAllItemsURLs(page, '.marketplace-listing-details-sidebar .py-3.lh-condensed.mb-n1 a');
  data['developer'] = await findItemText(page, '.marketplace-listing-details-sidebar .py-3.lh-condensed a.css-truncate');
  data['developer_url'] = await findItemURL(page, '.marketplace-listing-details-sidebar .py-3.lh-condensed a.css-truncate');
  data['developer_logourl'] = await findItemSrc(page, '.marketplace-listing-details-sidebar .py-3.lh-condensed a.css-truncate img');
  data['developer_links'] = await findAllItemsURLs(page, '.marketplace-listing-details-sidebar .py-3.lh-condensed li.mb-1 a');
  data['links'] = await extractLinks(page);

  return data;
}

async function extractLinks(page: any) {
  return await page.evaluate(() => Array.from(document.querySelectorAll("a")).map(anchor => [anchor.href, anchor.textContent.replace(/\n/, '').trim().replace(/\s\s+/g, ' ')]) );

  // page.$$eval('a', (as: any) => as.map((a: any) => [a.textContent.replace(/\n/, '').trim().replace(/\s\s+/g, ' '), a.href]));
}

async function findAllItemsText(page: any, element: string) {
  let texts: any[] = []
  try {
    texts = await page.$$eval(element, (items: any) => items.map((item: any) => item.textContent.replace(/\n/, '').trim().replace(/\s\s+/g, ' ')));
  } catch (err) {
    console.log(`// Error fetching text: ${err.message}`);
  }
  return texts
}

async function findItemText(page: any, element: string) {
  let text = null
  try {
    text = await page.$eval(element, (item: any) => item == undefined ? null : item.textContent.replace(/\n/, '').trim().replace(/\s\s+/g, ' ').replace('Read more..', ''));
  } catch (err) {
    console.log(`// Error fetching text: ${err.message}`);
  }
  return text
}

async function findAllItemsURLs(page: any, element: string) {
  let links: any[] = []
  try {
    links = await page.$$eval(element, (items: any) => items.map((item: any) => item.href));
  } catch (err) {
    console.log(`// Error fetching URLs: ${err.message}`);
  }
  return links
}

async function findItemSrc(page: any, element: string) {
  // findItemProperty(page, element, 'src')
  return await findItemProperty(page, element, 'src')
}

async function findItemURL(page: any, element: string) {
  return await findItemProperty(page, element, 'href')
}

async function findItemProperty(page: any, element: string, property: string) {
  let value = null
  try {
    if (property == 'href') {
      value = await page.$eval(element, (item: any) => item == undefined ? null : item.href);
    } else if (property == 'src') {
      value = await page.$eval(element, (item: any) => item == undefined ? null : item.src);
    }
  } catch (err) {
    console.log(`// Error fetching ${property}: ${err.message}`);
  }

  return value
}

module.exports = { extractPageContent };