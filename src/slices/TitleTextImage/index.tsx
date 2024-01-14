"use server";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

type componentsType = ({}: any) => JSXMapSerializer;

const getComponents: componentsType = ({
  bond_color,
  header_color,
  sub_header_color,
}: any) => {
  return {
    heading2: ({ children }: any) => {
      return (
        <Heading
          as="h2"
          size="lg"
          className="font-semibold text-center mb-4"
          color={header_color}
        >
          {children}
        </Heading>
      );
    },
    heading1: ({ children }: any) => {
      return (
        <Heading
          as="h1"
          size="xxs"
          className="font-light text-center mb-4"
          color={bond_color}
        >
          {children}
        </Heading>
      );
    },
    heading3: ({ children }: any) => {
      return (
        <Heading
          as="h3"
          size="sm"
          className="font-body text-center mb-4"
          color={sub_header_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }: any) => (
      <Paragraph
        className="text-center text-lg md:text-xl text-black-500 mt-8 mb-10"
        color={sub_header_color}
      >
        {children}
      </Paragraph>
    ),
  };
};

/**
 * Props for `TitleTextImage`.
 */
export type TitleTextImageProps =
  SliceComponentProps<Content.TitleTextImageSlice>;

/**
 * Component for "TitleTextImage" Slices.
 */
const TitleTextImage = ({ slice }: TitleTextImageProps): JSX.Element => {
  const components = getComponents({});
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto text-center">
        <PrismicRichText field={slice.primary.title} components={components} />
      </div>
      <div className="mx-auto text-center">
        <PrismicRichText field={slice.primary.text} components={components} />
      </div>
      <div className="w-full">
        <PrismicNextLink field={slice.primary.image_and_text_link}>
          <PrismicNextImage className="mx-auto" field={slice.primary.image} />
        </PrismicNextLink>
      </div>
    </Bounded>
  );
};

export default TitleTextImage;
