import { PrismaClient } from "@prisma/client";
import { Post } from "../types";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

export const addPosts = async (posts: Post[]) => {
  const items = await prisma.post.createMany({
    data: posts,
  });
  if (!items) {
    console.warn("Failed to post to database");
  }
  return items;
};

export const getPosts = async ({ page }: { page: number | undefined }) => {
  const items = await prisma.post.findMany({
    take: page ? 20 : 50,
    skip: page ? (page - 1) * 20 : 0,
  });
  if (items.length == 0) {
    console.warn("No posts found!!!!!");
  }
  return items;
};
