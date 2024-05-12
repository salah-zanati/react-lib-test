import { ToggleButton } from "@mui/material";
import React from "react";

interface M3Props {
  children?: React.ReactNode;
  value?: any;
  selected?: boolean;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  onChange?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: any
  ) => void;
}

const M3ToggleButton = ({
  children,
  value,
  selected,
  color,
  onChange,
}: M3Props) => {
  return (
    <ToggleButton
      value={value}
      selected={selected}
      color={color}
      onChange={onChange}
    >
      {children}
    </ToggleButton>
  );
};

export default M3ToggleButton;
