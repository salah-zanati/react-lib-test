import { Switch } from "@mui/material";
import React from "react";

interface M3Props {
  checked?: boolean;
  name?: string;
}

const M3Switch = ({ checked, name }: M3Props) => {
  return <Switch checked={checked} name={name} />;
};

export default M3Switch;
