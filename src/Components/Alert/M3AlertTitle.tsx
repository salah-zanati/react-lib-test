import { AlertTitle } from "@mui/material";
import React from "react";

type childrenType = React.ReactNode;

const M3AlertTitle = (children: childrenType) => {
  return <AlertTitle>{children}</AlertTitle>;
};

export default M3AlertTitle;
