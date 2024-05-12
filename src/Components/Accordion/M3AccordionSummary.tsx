import { AccordionSummary } from "@mui/material";
import React from "react";

interface M3Props {
  children?: React.ReactNode;
  expandIcon?: React.ReactNode;
}

const M3AccordionSummary = ({ children, expandIcon }: M3Props) => {
  return (
    <AccordionSummary expandIcon={expandIcon}>{children}</AccordionSummary>
  );
};

export default M3AccordionSummary;
