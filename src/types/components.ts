import { FC } from "react";
import { Props } from "react-feather";

import { IconName } from "ts-react-feather-icons/dist/types";

export type Icon = FC<Props>;

export type RadioOptionCard = {
  heading: string;
  caption: string;
  className: IconName;
}
export interface RouteParams {
  id: string
}