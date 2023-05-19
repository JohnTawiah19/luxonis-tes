import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ReactImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import { Post } from "type";
import { Carousel } from "./Carousel";
import _ from "lodash";
type Props = {
  data: Post;
};

export function Card({ data }: Props) {
  const { title, price, imgs, labels, location } = data;
  const carousel = React.useRef<ReactImageGallery>(null);

  const gallery: ReactImageGalleryItem[] = imgs.map((img) => ({
    original: img,
    originalClass: "gallery",
    originalAlt: title,
    thumbnail: img,
  }));

  const pillColors = ["#9C254D", "#E86A33", "#852999", "#4E6C50"];
  return (
    <Stack
      borderRadius={"lg"}
      w="18rem"
      shadow="lg"
      spacing={0}
      _hover={{ shadow: "xl" }}
    >
      <Carousel reference={carousel} images={gallery} />
      <Stack px={2} py={4} spacing={1}>
        <Heading size="sm">{title}</Heading>
        <Text>{location}</Text>
        <Text color="red.400" fontWeight={"bold"}>
          {price}
        </Text>
        <Flex wrap={"wrap"} columnGap={4} rowGap={2}>
          {labels.map((label, index) => (
            <Text
              px={2}
              borderRadius={"3xl"}
              fontWeight={index == 0 ? "bold" : "normal"}
              key={label}
              bg={"white"}
              border={`2px solid ${_.sample(pillColors)}`}
            >
              {label}
            </Text>
          ))}
        </Flex>
      </Stack>
    </Stack>
  );
}
