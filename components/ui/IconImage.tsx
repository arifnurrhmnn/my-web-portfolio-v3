"use client";

import Image from "next/image";
import { useState } from "react";

interface IconImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function IconImage({
  src,
  alt,
  className,
  width = 32,
  height = 32,
}: IconImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        onError={() => console.log(`Failed to load icon: ${src}`)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      unoptimized
      priority
      onError={() => setImageError(true)}
    />
  );
}
