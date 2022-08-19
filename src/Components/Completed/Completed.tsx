import { Button, Container, Image, Text } from "@mantine/core";
import React from "react";
import { CardDetails } from "../../App";
import { useStyles } from "./Styles";
type Props = {
  setCardDetails: React.Dispatch<React.SetStateAction<CardDetails>>;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
};

const Completed = ({ setCompleted, setCardDetails }: Props) => {
  const { classes } = useStyles();
  function handleSubmit() {
    setCardDetails({
      CardName: "",
      CardNumber: "",
      CVC: "",
      MM: 0,
      YY: 0,
    });
    setCompleted(false);
  }
  return (
    <Container className={classes.completed}>
      <Image src="/images/icon-complete.svg" width={60} height={60} />
      <Text className={classes.title}>Thank You!</Text>
      <Text className={classes.text}>We have added your card details</Text>
      <Button className={classes.btn} onClick={() => handleSubmit()}>
        Complete
      </Button>
    </Container>
  );
};

export default Completed;
