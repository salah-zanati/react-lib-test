import { Toolbar } from "@mui/material";
import React from "react";

type childrenType = React.ReactNode;

const M3Toolbar = (children: childrenType) => {
  return <Toolbar>{children}</Toolbar>;
};

export default M3Toolbar;
