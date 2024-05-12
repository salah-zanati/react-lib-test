import { Accordion } from "@mui/material";
import React from "react";

interface M3Props {
  children?: NonNullable<React.ReactNode>;
  disabled?: boolean;
  onChange?: (
    event: React.SyntheticEvent<Element, Event>,
    expanded: boolean
  ) => void;
}

const M3Accordion = ({ children, disabled, onChange }: M3Props) => {
  return (
    <Accordion disabled={disabled} onChange={onChange}>
      {children}
    </Accordion>
  );
};

export default M3Accordion;
