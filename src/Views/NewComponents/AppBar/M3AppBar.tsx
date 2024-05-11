import { AppBar } from "@mui/material";
import React from "react";

interface M3Props {
  children?: React.ReactNode;
  position?: "absolute" | "fixed" | "relative" | "static" | "sticky";
}

const M3AppBar = ({ children, position }: M3Props) => {
  return <AppBar position={position}>{children}</AppBar>;
};

export default M3AppBar;
