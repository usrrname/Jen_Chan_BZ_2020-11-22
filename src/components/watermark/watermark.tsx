import React from "react";
import { ReactComponent as Logo } from "../../assets/logos/logo.svg";
import './watermark.scss'
import Typography from "../typography/typography";

type Props = {
  path: string;
  copy: string;
}

export const Watermark = ({ path, copy }: Props) => {
  return (
    <div className="app-watermark">
      <Logo title="logo" className="d-inline mr-2"></Logo>
      <span><Typography variant={"h6"} color={"watermark-gray"}>{copy}</Typography>
      </span>
    </div>
  )
}