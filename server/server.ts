import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { spider } from "./crawler";
import cors from "cors";
// Create Express apprs
const app = express();
const port = 3001;

const pages = 25;
const currentPage = 1;
const url = `https://www.sreality.cz/en/search/for-sale/apartments?page=${currentPage}`;
// Parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// Define a route
app.get("/", async (req: Request, res: Response) => {
  const data = await spider(url);
  res.send(JSON.stringify(data));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
