import { Avatar } from "@mui/material";
import React from "react";

interface M3Props {
  src?: string;
  children?: React.ReactNode;
  alt?: string;
  variant?: "circular" | "rounded";
  sx?: object;
}

const M3Avatar = ({ children, alt, src, sx, variant }: M3Props) => {
  return (
    <Avatar src={src} alt={alt} sx={sx} variant={variant}>
      {children}
    </Avatar>
  );
};

export default M3Avatar;
