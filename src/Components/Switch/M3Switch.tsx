import { Switch } from "@mui/material";
import React from "react";

interface M3Props {
  checked?: boolean;
  name?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

const M3Switch = ({ checked, name, onChange }: M3Props) => {
  return <Switch checked={checked} name={name} onChange={onChange} />;
};

export default M3Switch;
