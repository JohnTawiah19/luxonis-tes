import { spider } from "./crawler";
import { addPosts, getPosts } from "./prisma/client";

export async function postApartments() {
  const pages = 25;
  let currentPage = 1;
  for (let i = 0; i < pages; i++) {
    let url = `https://www.sreality.cz/en/search/for-sale/apartments?page=${currentPage}`;
    const data = await spider(url);
    console.log(`Fetching data from Page ${i + 1}. !!!`);
    await addPosts(data);
    currentPage++;
  }
  console.log("Successfully posted all the data to the database");
}

export async function getApartments(page: number) {
  const data = await getPosts({ page });
  return data;
}
