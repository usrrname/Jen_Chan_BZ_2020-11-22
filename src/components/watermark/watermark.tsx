import React from "react";
import { ReactComponent as Logo } from "../../logo.svg";

type Props = {
  path: string;
  copy: string;
}

export const Watermark = (props: Props) => {
  return (
    <div className="app-watermark">
      <Logo title="Briza logo" className="d-inline pt-2"></Logo>
      <span className="watermark ml-2">{props.copy}</span>
    </div>
  )
}