import * as puppet from "puppeteer";
import { Post } from "./types";
//Write crawler

export const spider = async (url: string) => {
  console.log("Please wait!!! Crawling pages...");

  const selectors = ".property.ng-scope";
  const browser = await puppet.launch({ headless: "new", timeout: 500000 });
  const page = await browser.newPage();
  await page.goto(url);

  await page.waitForSelector(selectors);

  const divs = await page.$$(selectors);

  const cards = await getCardList(divs);

  await browser.close();
  return cards;
};

async function getCardList(cards: puppet.ElementHandle<Element>[]) {
  const cardList: Post[] = [];
  for (const card of cards) {
    const data = await extractCard(card);
    cardList.push(data);
  }
  return cardList;
}
async function extractCard(card: puppet.ElementHandle<Element>) {
  const titleSelector = ".name";
  const locationSelector = ".locality";
  const priceSelector = ".norm-price";
  const labelSelector = ".label";

  const title = await card.$eval(titleSelector, (el) => el.textContent);
  const location = await card.$eval(locationSelector, (el) => el.textContent);
  const price = await card.$eval(priceSelector, (el) => el.textContent);

  const labels = await card.$$eval(labelSelector, (label) => {
    return label.map((el) => {
      const text = el.textContent.trim().replace(/\n|\t/g, "");
      return text;
    });
  });

  const logo = "https://www.sreality.cz/img/camera.svg";
  const pics = await card.$$eval("img", (images) =>
    images.map((img) => img.src)
  );
  const imgs = pics.filter((img) => img != logo);

  return { title, location, price, labels, imgs };
}
