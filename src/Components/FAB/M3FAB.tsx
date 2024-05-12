import { Fab } from "@mui/material";
import React from "react";

interface M3Props {
  children?: React.ReactNode;
  color?:
    | "error"
    | "info"
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  variant?: "circular" | "extended";
}

const M3FAB = ({ children, color, variant }: M3Props) => {
  return (
    <Fab color={color} variant={variant}>
      {children}
    </Fab>
  );
};

export default M3FAB;
