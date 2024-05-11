import React from "react";
import { Button } from "@mui/material";

interface M3Props {
  children?: React.ReactNode;
  variant?: "text" | "outlined" | "contained" | "tonal" | "filled";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

const M3Button = ({ children, variant = "text", disabled, size }: M3Props) => {
  return (
    <>
      <Button variant={variant} disabled={disabled} size={size}>
        {children}
      </Button>
    </>
  );
};

export default M3Button;
