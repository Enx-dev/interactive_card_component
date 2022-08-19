import React from "react";
import { BackgroundImage, Box, Center } from "@mantine/core";
import { useStyles } from "./Styles";
type Props = {
  cvc: string;
};

const Cardback = ({ cvc }: Props) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <BackgroundImage
        sx={(theme) => ({
          height: "100%",
          paddingInline: "1.8rem",
          borderRadius: theme.radius.md,
        })}
        src="/images/bg-card-back.png">
        <Center sx={{ justifyContent: "flex-end" }} className={classes.center}>
          {cvc ? cvc : "000"}
        </Center>
      </BackgroundImage>
    </Box>
  );
};

export default Cardback;
