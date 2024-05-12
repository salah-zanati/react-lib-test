import React from "react";
import { Card } from "@mui/material";

interface M3Props {
  children?: React.ReactNode;
  variant?: "elevation" | "outlined" | "filled";
}

const M3Card = ({ children, variant }: M3Props) => {
  return <Card variant={variant}>{children}</Card>;
};

export default M3Card;
