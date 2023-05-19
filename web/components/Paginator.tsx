import { Button, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { Helpers } from "hooks/useStep";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Props = {
  helpers: Helpers;
  maxPages: number;
  currentPage: number;
};

export function Paginator({ helpers, maxPages, currentPage }: Props) {
  const {
    canGoToNextStep,
    canGoToPrevStep,
    goToNextStep,
    goToPrevStep,
    setStep,
  } = helpers;
  return (
    <Flex justifyContent={"center"} pb={8}>
      {" "}
      <HStack>
        <IconButton
          aria-label="Go to previous page"
          _disabled={{ bg: "gray.300", cursor: "not-allowed" }}
          bg={"red.500"}
          color={"white"}
          onClick={goToPrevStep}
          icon={<BsChevronLeft />}
          isDisabled={!canGoToPrevStep}
        />
        <HStack px={8}>
          {" "}
          {Array(maxPages)
            .fill(0)
            .map((page, index) => (
              <Button
                size="sm"
                _hover={{ bg: "red.100" }}
                bg={currentPage == index + 1 ? "red.500" : "gray.100"}
                color={currentPage == index + 1 ? "white" : "black"}
                borderRadius={"50%"}
                key={index}
                onClick={() => setStep(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
        </HStack>

        <IconButton
          onClick={goToNextStep}
          aria-label="Go to next page"
          _disabled={{ bg: "gray.300", cursor: "not-allowed" }}
          bg={"red.500"}
          color={"white"}
          isDisabled={!canGoToNextStep}
          icon={<BsChevronRight />}
        />
      </HStack>
    </Flex>
  );
}
