import axios from "axios";
import cheerio from "cheerio";
import * as puppet from "puppeteer";
//Write crawler

export const spider = async (url: string) => {
  console.log("Crawling page...");

  const selectors = ".property.ng-scope";
  const titleSelector = ".name";
  const locationSelector = ".locality";
  const priceSelector = ".norm-price";
  const labelSelector = ".label";
  const browser = await puppet.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto(url);

  await page.waitForSelector(titleSelector);

  const card = await page.$(selectors);

  if (card) {
    const title = await card.$eval(titleSelector, (el) => el.textContent);

    const location = await card.$eval(locationSelector, (el) => el.textContent);
    const price = await card.$eval(priceSelector, (el) => el.textContent);

    const labels = await card.$$eval(labelSelector, (label) => {
      return label.map((el) => {
        const text = el.textContent.trim().replace(/\n|\t/g, "");
        return text;
      });
    });

    const imgs = await card.$$eval("img", (images) =>
      images.map((img) => img.src)
    );
    console.log(labels);
    return { title, location, price, labels, imgs };
  }

  await browser.close();
};
