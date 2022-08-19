import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  header__Box: {
    height: "250px",
    display: "flex",
    justifyContent: "center",

    [`@media (min-width:${theme.breakpoints.md}px)`]: {
      height: "100%",
      justifyContent: "flex-start",
      maxWidth: "500px",
      width: "30vw",
    },
  },
  header__BI: {
    height: "100%",
    display: "flex",
    paddingInline: theme.spacing.md,
    [`@media (min-width:${theme.breakpoints.md}px)`]: {
      width: "100%",
      alignItems: "center",
      display: "flex",
    },
  },
  header__Container: {
    position: "relative",
    width: "300px",
    height: "100%",
    [`@media (min-width:${theme.breakpoints.md}px)`]: {
      height: "unset",
      alignItems: "center",
    },
  },
}));
