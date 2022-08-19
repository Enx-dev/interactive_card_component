import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    width: "300px",
    height: "170px",
    position: "absolute",
    top: "20px",
    left: "30px",
    right: 0,
    margin: "auto",
    [`@media (min-width:${theme.breakpoints.md}px)`]: {
      left: "70%",
      width: "clamp(250px,90vw,350px)",

      height: "clamp(170px,50vh,200px)",
    },
  },
  center: {
    height: "170px",
    color: theme.colors.lightGrayViolet[0],
    fontSize: "0.8rem",
    fontWeight: "bold",
    [`@media (min-width:${theme.breakpoints.md}px)`]: {
      height: "clamp(170px,50vh,200px)",
    },
  },
}));
