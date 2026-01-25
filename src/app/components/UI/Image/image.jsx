import React from "react";
import Image from "next/image";

export const ImageRender = ({ modifiers, propImg }) => {
  return (
    <Image
      {...modifiers}
      src={propImg}
      alt="profileImage"
      width={0}
      height={0}
      quality={75}
    />
  );
};
