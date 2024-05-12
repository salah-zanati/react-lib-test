import { ToggleButtonGroup } from "@mui/material";
import React from "react";

interface M3Props {
  children?: React.ReactNode;
  exclusive?: boolean;
  value?: any;
  onChange?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: any
  ) => void;
}

const M3ToggleButtonGroup = ({
  children,
  exclusive,
  value,
  onChange,
}: M3Props) => {
  return (
    <ToggleButtonGroup exclusive={exclusive} value={value} onChange={onChange}>
      {children}
    </ToggleButtonGroup>
  );
};

export default M3ToggleButtonGroup;
