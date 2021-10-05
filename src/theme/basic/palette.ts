import { colors } from "@mui/material";
import { palette as common } from "../common";

const palette = {
  primary: {
    main: "#00897b",
    dark: "#005F56",
    sub: "#00BFA5"
  },
  secondary: {
    main: "#0277BD",
    dark: "#015384"
  },
  error: {
    main: "#f50057",
    dark: "#AB003C"
  },
  select: {
    dark: "#2c89b2",
    main: "#40c4ff",
    light: "#66cfff",
    hover: "#27799e"
  },
  normal: {
    dark: "#F4F6F8",
    main: common.white,
    hover: "#ababab"
  },
  sub: {
    dark: "rgba(0, 0, 0, 0.78)",
    darkHex: "#383838",
    main: "rgba(0, 0, 0, 0.54)",
    mainHex: "#878787"
  },
  oe: "#FFAB00",
  font: {
    hex: "#212121",
    rgba: "rgba(0, 0, 0, 0.87)"
  },
  disabled: {
    hex: "#ababab",
    rgba: "rgba(0, 0, 0, 0.38)"
  },
  inactive: {
    hex: "#dbdbdb",
    rgba: "rgba(0, 0, 0, 0.16)"
  },
  result: {
    main: "#CFD8DC",
    blank: "#D5DDE0"
  },
  text: {
    primary: colors.blueGrey[900], //#263238
    secondary: colors.blueGrey[600], //#546e7a
    link: colors.blue[600] //#1e88e5
  },
  input: {
    main: "rgba(0, 0, 0, 0.38)",
    hover: "rgba(0, 0, 0, 0.87)"
  },
  background: {
    default: "#eceff1",
    paper: common.white
  },
  hover: "rgba(0, 0, 0, 0.78)",
  icon: "#01579b",
  divider: colors.grey[200], //#eeeeee
  border: {
    main: "#b0bec5",
    active: "#2196f3",
    guide: "#76B5DB"
  },
  focus: "#b6e8ff",
  focusBorder: "#0091ff"
};
export default palette;
