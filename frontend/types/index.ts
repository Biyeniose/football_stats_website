import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Player {
  player_name: string;
  number: number;
  g_a: number;
  goals: number;
  assists: number;
  age: number;
  position: string;
  photo_url: string;
  apps: number;
  nation: string[];
}
