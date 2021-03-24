import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em", // 640px
  md: "52em", // 832px
  lg: "64em", // 1024px
  xl: "80em", // 1280px
});

// const breakpoints = ["0em", "40em", "52em", "64em", "80em"] <- 이렇게 내부적으로 바뀜

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
