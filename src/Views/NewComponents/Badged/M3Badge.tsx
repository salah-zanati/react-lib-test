import { Badge } from "@mui/material";
import React from "react";

interface M3Props {
  children?: React.ReactNode;
  badgeContent?: React.ReactNode;
  max?: number;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  variant?: "dot" | "standard";
  invisible?: boolean;
}

const M3Badge = ({
  children,
  badgeContent,
  color,
  invisible,
  max,
  variant,
}: M3Props) => {
  return (
    <Badge
      badgeContent={badgeContent}
      max={max}
      color={color}
      variant={variant}
      invisible={invisible}
    >
      {children}
    </Badge>
  );
};

export default M3Badge;
