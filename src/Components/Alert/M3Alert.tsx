import { Alert } from "@mui/material";
import React, { EventHandler, SyntheticEvent } from "react";

interface M3Props {
  children?: React.ReactNode;
  severity?: "error" | "warning" | "info" | "success";
  onClose?: (event: React.SyntheticEvent<Element, Event>) => void;
}

const M3Alert = ({ children, severity, onClose }: M3Props) => {
  return (
    <Alert severity={severity} onClose={onClose}>
      {children}
    </Alert>
  );
};

export default M3Alert;
