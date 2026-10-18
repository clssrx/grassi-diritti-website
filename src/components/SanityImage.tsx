import Image from "next/image";
import { type SanityImageSource } from "@sanity/image-url";

import { urlFor } from "@/sanity/lib/image";

type SanityImageValue = {
  asset?: {
    _id?: string | null;
    _ref?: string | null;
    metadata?: {
      dimensions?: {
        width?: number | null;
        height?: number | null;
      } | null;
    } | null;
  } | null;
  alt?: string | null;
  decorative?: boolean | null;
};

type SanityImageProps = {
  value: SanityImageValue;
  className?: string;
  fill?: boolean;
  sizes: string;
};

export function SanityImage({
  value,
  className,
  fill = false,
  sizes,
}: SanityImageProps) {
  if (!value.asset?._id && !value.asset?._ref) {
    return null;
  }

  const src = urlFor(value as SanityImageSource)
    .width(1600)
    .auto("format")
    .url();
  const alt = value.decorative ? "" : value.alt ?? "";
  const width = value.asset?.metadata?.dimensions?.width ?? 1600;
  const height = value.asset?.metadata?.dimensions?.height ?? 900;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
    />
  );
}
