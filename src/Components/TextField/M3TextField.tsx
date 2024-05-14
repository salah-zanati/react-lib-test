import { TextField } from "@mui/material";
import React from "react";

interface M3Props {
  autoComplete?: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  variant?: "filled" | "outlined" ;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  label?: string;
  onChange?: () => void;
  value?: string;
  name?: string;
  sx?: object;
  inputMode?: "email" | "number" | "password" | "search" | "text" | "tel" | "url";
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  size?: "small" | "medium";
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLInputElement>) => void;
  onInvalid?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const M3TextField = ({ ...props }: M3Props) => {
  return <TextField  inputMode="decimal" {...props}></TextField>;
};

export default M3TextField;
