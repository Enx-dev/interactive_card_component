import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  btn: {
    marginBlockStart: "2rem",
    alignSelf: "stretch,",
    height: "2.5rem",
    width: "100%",
    fontWeight: "normal",
  },
  text: { color: theme.colors.lightGrayViolet[4] },
  title: {
    fontSize: "1.7rem",
    color: theme.colors.veryDarkViolet[2],
    marginBlockStart: "0.5rem",
  },
  completed: { display: "flex", flexDirection: "column", alignItems: "center" },
}));
