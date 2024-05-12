import { AccordionActions } from "@mui/material";
import React from "react";

type childrenType = React.ReactNode;

const M3AccordionActions = (children: childrenType) => {
  return <AccordionActions>{children}</AccordionActions>;
};

export default M3AccordionActions;
