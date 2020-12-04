import { createBox, createText, createTheme } from "@shopify/restyle";

import responsivePixelSize from "../utils/responsivePixelSize";

const palette = {
  crimson: "#DC1637",
  salmonPink: "#FF99AA",
  greenPantone: "#03B252",
  // Backgrounds
  white: "#FFFFFF",
  honeydew: "#DAF3E5",
  raisinBlack: "#1B1B1F",
  jet: "#29292E",
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
    backgroundLight1: palette.white,
    backgroundLight2: palette.honeydew,
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
    xxl: responsivePixelSize(92),
  },
  borderRadii: {},
  textVariants: {},
  breakpoints: {},
  zIndices: {},
});

export type Colors = keyof typeof theme.colors;
export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
