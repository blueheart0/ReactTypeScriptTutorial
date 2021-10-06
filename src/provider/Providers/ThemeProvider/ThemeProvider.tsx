import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { palette as basic, typography } from "../../../theme/basic";
import { palette as common } from "../../../theme/common";
import { Locales } from "locales";

interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps): React.ReactElement<ThemeProviderProps> => {
  const theme = {
    themeName: "Basic Theme",
    spacing: 8,
    palette: {
      ...basic,
      ...common
    },
    typography,
    direction: Locales.Languages.direction
  };


  return <MuiThemeProvider theme={theme}>
    {props.children}
  </MuiThemeProvider>;
};
export default ThemeProvider;