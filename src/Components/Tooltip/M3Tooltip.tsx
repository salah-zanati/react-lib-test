import { Tooltip } from "@mui/material";
import React from "react";

interface M3Props {
  children: React.ReactElement;
  title?: React.ReactNode;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  arrow?: boolean;
  open?: boolean;
}

const M3Tooltip = ({ children, arrow, open, placement, title }: M3Props) => {
  return (
    <Tooltip arrow={arrow} open={open} placement={placement} title={title}>
      {children}
    </Tooltip>
  );
};

export default M3Tooltip;
