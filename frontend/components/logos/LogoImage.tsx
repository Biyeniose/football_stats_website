"use client";

import React from "react";
import { Image } from "@nextui-org/react";

interface LogoImageComponentProps {
  url: string;
}

const LogoImage: React.FC<LogoImageComponentProps> = ({ url }) => {
  return (
    <Image
      alt="Dynamic Image"
      radius="lg" // You can change this to any value or make it dynamic
      src={url}
      width={45} // You can set a fixed width or make it dynamic
    />
  );
};

export default LogoImage;
