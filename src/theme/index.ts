import { createBox, createText, createTheme } from "@shopify/restyle";

import responsivePixelSize from "../utils/responsivePixelSize";

const palette = {
  crimson: "#DC1637",
  salmonPink: "#FF99AA",
  greenPantone: "#03B252",
  // Backgrounds
  white: "#FFFFFF",
  whiteLilac: "#F2F2FA",
  honeydew: "#DAF3E5",
  raisinBlack: "#1B1B1F",
  jet: "#29292E",
  black: "#000000",
  // Texts
  darkLiver: "#47474D",
  sonicSilver: "#7A7A80",
  silverMetallic: "#AEAEB3",
  gainsboro: "#DEDEE3",
  cultured: "#F4F5F6",
  ghostWhite: "#EBEBF0",
  lavenderBlush: "#FDEDEF",
};

const theme = createTheme({
  colors: {
    primary: palette.crimson,
    primaryLight: palette.salmonPink,
    backgroundDark1: palette.raisinBlack,
    backgroundDark2: palette.jet,
    backgroundDark3: palette.black,
    backgroundLight1: palette.white,
    backgroundLight2: palette.whiteLilac,
    backgroundLight3: palette.honeydew,
    textDark1: palette.darkLiver,
    textDark2: palette.sonicSilver,
    textMediumLight1: palette.silverMetallic,
    textMediumLight2: palette.gainsboro,
    textLight1: palette.cultured,
    textLight2: palette.ghostWhite,
    textLight3: palette.lavenderBlush,
  },
  spacing: {
    zero: 0,
    xxs: responsivePixelSize(4),
    xs: responsivePixelSize(8),
    s: responsivePixelSize(16),
    ms: responsivePixelSize(24),
    m: responsivePixelSize(28),
    ml: responsivePixelSize(32),
    l: responsivePixelSize(40),
    xl: responsivePixelSize(80),
    xxl: responsivePixelSize(96),
  },
  borderRadii: {},
  textVariants: {
    titleDarkLargeBold: {
      fontFamily: "Archivo-Bold",
      color: "textDark1",
      fontSize: responsivePixelSize(40),
    },
    titleDarkLargeSemiBold: {
      fontFamily: "Archivo-SemiBold",
      color: "textDark1",
      fontSize: responsivePixelSize(40),
    },
    titleDarkSemiBold: {
      fontFamily: "Archivo-SemiBold",
      fontSize: responsivePixelSize(20),
      color: "textDark1",
    },
    titleLightLargeSemiBold: {
      fontFamily: "Archivo-SemiBold",
      color: "textLight1",
      fontSize: responsivePixelSize(40),
    },
    regularTextDark: {
      fontFamily: "Roboto-Regular",
      color: "textDark2",
      fontSize: responsivePixelSize(24),
      lineHeight: responsivePixelSize(30),
    },
    regularTextMediumLight: {
      fontFamily: "Roboto-Regular",
      color: "textMediumLight2",
      fontSize: responsivePixelSize(24),
      lineHeight: responsivePixelSize(30),
    },
    mediumTextMediumLight: {
      fontFamily: "Roboto-Medium",
      color: "textMediumLight2",
      fontSize: responsivePixelSize(24),
      lineHeight: responsivePixelSize(30),
    },
    smallTextMediumDark: {
      fontFamily: "Archivo-Medium",
      color: "textDark2",
      fontSize: responsivePixelSize(20),
    },
    mediumTextLight: {
      fontFamily: "Roboto-Medium",
      color: "textLight1",
      fontSize: responsivePixelSize(24),
      lineHeight: responsivePixelSize(30),
    },
  },
  breakpoints: {},
  zIndices: {},
});

export type Colors = keyof typeof theme.colors;
export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
