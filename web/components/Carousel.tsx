import { Icon, Stack, StackProps } from "@chakra-ui/react";
import React from "react";
import ReactImageGallery, {
  ReactImageGalleryItem,
  ReactImageGalleryProps,
} from "react-image-gallery";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Props = {
  images: ReactImageGalleryItem[];
  reference: React.MutableRefObject<ReactImageGallery | null>;
};

export function Carousel({ images, reference, ...rest }: Props & StackProps) {
  return (
    <Stack borderRadius={"lg"} {...rest}>
      <ReactImageGallery
        ref={reference}
        lazyLoad
        items={images}
        showThumbnails={false}
        showPlayButton={false}
        showBullets
        renderLeftNav={(onClick, disabled) => (
          <button
            type="button"
            className="image-gallery-icon image-gallery-left-nav"
            disabled={disabled}
            onClick={(e) => {
              reference.current?.slideToIndex(
                reference.current.getCurrentIndex() - 1
              );
            }}
            aria-label="Previous Slide"
          >
            <Icon as={BsChevronLeft} fontSize={"1.8rem"} />
          </button>
        )}
        renderRightNav={(onClick, disabled) => (
          <button
            type="button"
            className="image-gallery-icon image-gallery-right-nav"
            disabled={disabled}
            onClick={(e) => {
              e.stopPropagation();
              reference.current?.slideToIndex(
                reference.current.getCurrentIndex() + 1
              );
            }}
            aria-label="Next Slide"
          >
            <Icon as={BsChevronRight} fontSize={"1.8rem"} />
          </button>
        )}
      />
    </Stack>
  );
}
