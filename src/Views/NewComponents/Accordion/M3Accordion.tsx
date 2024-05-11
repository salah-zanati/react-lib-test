import { Accordion } from "@mui/material";
import React from "react";

interface M3Props {
  children?: React.ReactNode;
  disabled?: boolean;
}

const M3Accordion = ({ children, disabled }: M3Props) => {
  return <Accordion disabled={disabled}>{children}</Accordion>;
};

export default M3Accordion;
