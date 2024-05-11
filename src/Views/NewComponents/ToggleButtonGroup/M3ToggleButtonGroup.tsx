import { ToggleButtonGroup } from "@mui/material";
import React from "react";

interface M3Props {
  children?: React.ReactNode;
  exclusive?: boolean;
  value?: any;
}

const M3ToggleButtonGroup = ({ children, exclusive, value }: M3Props) => {
  return (
    <ToggleButtonGroup exclusive={exclusive} value={value}>
      {children}
    </ToggleButtonGroup>
  );
};

export default M3ToggleButtonGroup;
