import palette from "./palette";

const ratio =
  localStorage.getItem("lang") === "ru"
    ? 0.8
    : localStorage.getItem("lang") === "ar"
    ? 1.1
    : 1;

const typography = {
  h1: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: 35 * ratio,
    letterSpacing: "-0.24px",
    lineHeight: "40px"
  },
  h2: {
    color: palette.text.primary,
    fontWeight: "bold",
    fontSize: 24 * ratio,
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: "1.33"
  },
  h3: {
    color: palette.text.primary,
    fontWeight: "bold",
    fontSize: 20 * ratio,
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: "normal"
  },
  h4: {
    color: palette.text.primary,
    fontWeight: "bold",
    fontSize: 16 * ratio,
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: "19px"
  },
  h5: {
    color: palette.text.primary,
    fontWeight: "bold",
    fontSize: 14 * ratio,
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: "16px"
  },
  h6: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: 14 * ratio,
    letterSpacing: "-0.05px",
    lineHeight: "20px"
  },
  subtitle1: {
    color: palette.text.primary,
    fontSize: 16 * ratio,
    letterSpacing: "-0.05px",
    lineHeight: "25px"
  },
  subtitle2: {
    color: palette.text.secondary,
    fontWeight: 400,
    fontSize: 14 * ratio,
    letterSpacing: "-0.05px",
    lineHeight: "21px"
  },
  body1: {
    color: palette.text.primary,
    fontSize: 14 * ratio,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal"
  },
  body2: {
    color: palette.text.secondary,
    fontSize: 12 * ratio,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.33",
    letterSpacing: "normal"
  },
  button: {
    color: palette.text.primary,
    fontSize: 14 * ratio
  },
  caption: {
    color: palette.text.primary,
    fontSize: 11 * ratio,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.45",
    letterSpacing: "normal"
  },
  overline: {
    color: palette.text.secondary,
    fontSize: 11 * ratio,
    fontWeight: 500,
    letterSpacing: "0.33px",
    lineHeight: "13px",
    textTransform: "uppercase"
  }
};
export default typography;
