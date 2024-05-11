import { Alert } from "@mui/material";
import React from "react";

interface M3Props {
  children?: React.ReactNode;
  severity?: "error" | "warning" | "info" | "success";
}

const M3Alert = ({ children, severity }: M3Props) => {
  return <Alert severity={severity}>{children}</Alert>;
};

export default M3Alert;
