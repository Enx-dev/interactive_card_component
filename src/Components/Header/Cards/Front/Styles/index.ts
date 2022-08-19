import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    width: "300px",
    height: "170px",
    position: "absolute",
    bottom: "-50px",
    left: 0,
    right: 0,
    margin: "auto",
    boxShadow: `0 20px 23px -10px ${theme.colors.darkGrayViolet[1]}`,
    [`@media (min-width:${theme.breakpoints.md}px)`]: {
      bottom: "0",
      width: "clamp(250px,90vw,350px)",
      height: "clamp(170px,50vh,200px)",

      boxShadow:
        "14.7px 0px 8.6px rgba(0, 0, 0, 0.017),40.7px 0px 23.8px rgba(0, 0, 0, 0.025),98px 0px 57.3px rgba(0, 0, 0, 0.033),325px 0px 190px rgba(0, 0, 0, 0.05)",
      left: "45%",
    },
  },
  bgImg: {
    height: "100%",
    padding: "1rem",
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: `${theme.radius.md} !important`,
    "& > img": { width: "clamp(60px,10vw,100px)" },
  },
  text: { textTransform: "uppercase" },
  box: { color: theme.colors.lightGrayViolet[0] },
  title: { fontWeight: "normal", fontSize: "clamp(1rem,3vw,1.5rem)" },
}));
