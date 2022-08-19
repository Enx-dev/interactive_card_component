import { createStyles, MantineTheme } from "@mantine/core";

export const useStyles = createStyles((theme: MantineTheme) => ({
  container: {
    padding: "1rem",
    maxWidth: "375px",
  },
  box: { display: "flex", flexDirection: "column", gap: "1rem" },
  input: {
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    "& span": {
      color: "red",
    },
  },
  group1: { display: "flex", flexWrap: "nowrap" },
  inputWrapper: {
    textTransform: "uppercase",
    letterSpacing: "0.15rem",
    display: "flex",
    flexDirection: "column",
    "& span": {
      color: "red",
    },
    ".mantine-InputWrapper-error": {
      color: "red",
    },
  },
  group2: { display: "flex", flexWrap: "nowrap", gap: "0.15em" },
  btn: {
    height: "3rem",
    fontSize: "1rem",
    fontWeight: 500,
    borderRadius: theme.radius.md,
  },
}));

export const theme = {
  components: {
    InputWrapper: {
      styles: (theme: MantineTheme) => ({
        label: {
          color: theme.colors.veryDarkViolet[5],
          fontSize: "0.7rem",
          marginBottom: "0.2rem",
        },
      }),
    },
    Input: {
      styles: (theme: MantineTheme) => ({
        input: {
          height: "2.3rem",
          borderRadius: theme.radius.md,
        },
      }),
    },
  },
};
