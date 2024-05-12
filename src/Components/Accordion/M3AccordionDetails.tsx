import { AccordionDetails } from "@mui/material";
import React from "react";

type childrenType = React.ReactNode;

const M3AccordionDetails = (children: childrenType) => {
  return <AccordionDetails>{children}</AccordionDetails>;
};

export default M3AccordionDetails;
