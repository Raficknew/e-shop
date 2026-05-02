"use client";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

const FALLBACK_SRC = "/image-not-available.svg";

export const ProductImage = (props: ImageProps) => {
  const [src, setSrc] = useState(props.src);

  return <Image {...props} src={src} onError={() => setSrc(FALLBACK_SRC)} />;
};
