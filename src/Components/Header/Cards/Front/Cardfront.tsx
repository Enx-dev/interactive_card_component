import React from "react";
import { BackgroundImage, Box, Group, Title, Text, Space } from "@mantine/core";
import { useStyles } from "./Styles";
import { cc_format } from "../../../../utils/CreditCardFormat";
type Props = {
  name: string;
  number: string;
  MM: number;
  YY: number;
};

const Cardfront = ({ MM, YY, name, number }: Props) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <BackgroundImage
        sx={(theme) => ({ borderRadius: theme.radius.md })}
        className={classes.bgImg}
        src="/images/bg-card-front.png">
        <img src="/images/card-logo.svg" alt="" />
        <Box className={classes.box}>
          <Title className={classes.title} order={3}>
            {number ? cc_format(number) : "0000 0000 0000 0000"}
          </Title>
          <Space h={5} />
          <Group position="apart">
            <Text className={classes.text} size="xs" variant="text">
              {name ? name : "Jane Appleseed"}
            </Text>
            <Text size="xs">
              {MM ? MM : 10}/{YY ? YY : 22}
            </Text>
          </Group>
        </Box>
      </BackgroundImage>
    </Box>
  );
};

export default Cardfront;
