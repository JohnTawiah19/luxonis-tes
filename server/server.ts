import express, { Request, Response } from "express";
import cors from "cors";
import { postApartments } from "./service";
import { getPosts } from "./prisma/client";
// Create Express apprs
const app = express();
const port = 3001;

// Parse JSON bodies
app.use(cors());

// Define a route
app.get("/posts", async (req: Request, res: Response) => {
  const { page } = req.query;
  const data = await getPosts({ page: Number(page) });
  res.json({ posts: data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  console.log("Please wait...");
  postApartments();
});
