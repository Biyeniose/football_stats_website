import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({ size = 36, width, height }) => (
  <img
    alt="logo"
    height={size || height}
    src="https://tmssl.akamaized.net/images/wappen/homepageWappen70x70/418.png?lm=1697726166"
    width={size || width}
  />
);
