import { Tuple } from "@mantine/core";

type CustomColors =
  | "lightGrayViolet"
  | "darkGrayViolet"
  | "veryDarkViolet"
  | "gradientFrom"
  | "gradientTo";

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<CustomColors, Tuple<string, 10>>;
    primaryColor;
    primaryShade;
  }
}
