import React from "react";
import { CardMedia } from "@mui/material";

interface M3Props {
  image?: string;
  sx?: object;
}

const M3CardMedia = ({ image, sx }: M3Props) => {
  return <CardMedia image={image} sx={sx} />;
};

export default M3CardMedia;
