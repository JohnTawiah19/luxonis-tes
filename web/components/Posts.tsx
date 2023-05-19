import { Flex, HStack, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { Post } from "type";
import { Card } from "./Card";

type Props = {
  posts: Post[];
};

export function Posts({ posts }: Props) {
  return (
    <Stack p={8} spacing={4} alignItems={{ base: "center", lg: "flex-start" }}>
      <Heading size="lg"> Available apartments for Sale</Heading>
      <Flex wrap="wrap" gap={8} justifyContent={"center"}>
        {posts.map((post) => (
          <Card key={post.id} data={post} />
        ))}
      </Flex>
    </Stack>
  );
}
