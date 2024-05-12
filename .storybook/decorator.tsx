import React from "react";
import M3Theme from "../src/Theme/M3/wrapper/M3Theme";
interface Props {
  children?: React.ReactNode;
}

const ThemeDecorator = ({ children }: Props) => {
  return (
    <center
 
    >
      <M3Theme themeColor="#005f51">{children}</M3Theme>
    </center>
  );
};

export default ThemeDecorator;
