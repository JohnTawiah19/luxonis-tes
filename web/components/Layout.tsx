import { Flex, FlexProps } from "@chakra-ui/react";

const MAX_WIDTH = "1920px";

export const PageLayout = (props: FlexProps) => {
  return (
    <Flex
      mx={{ base: "0", md: "auto" }}
      p={4}
      maxW={MAX_WIDTH}
      direction="column"
      boxShadow="6px 1px 18px #44866b1a"
      willChange="background, color"
      transition="background 450ms ease 0s"
      {...props}
    />
  );
};
