/* eslint-disable no-octal */
import React, { useState } from "react";
import { Container, createStyles, SimpleGrid, Space } from "@mantine/core";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import Completed from "./Components/Completed/Completed";

export type CardDetails = {
  CardName: string;
  CardNumber: string;
  MM: number;
  YY: number;
  CVC: string;
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
    [`@media (min-width:${theme.breakpoints.md}px)`]: {
      alignItems: "center",
    },
  },
  space: {
    [`@media (min-width:${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
}));

function App() {
  const [compeleted, setCompleted] = useState(false);
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    CardName: "Jane Appleseed",
    CardNumber: "0000 0000 0000 0000",
    CVC: "000",
    MM: 12,
    YY: 20,
  });
  const { classes } = useStyles();
  return (
    <SimpleGrid
      className={classes.wrapper}
      cols={1}
      breakpoints={[{ minWidth: 992, cols: 2, spacing: "md" }]}
      sx={{ margin: "0", padding: "0" }}>
      <Header cardDetails={cardDetails} setCardDetails={setCardDetails} />
      <Space className={classes.space} />
      <Space className={classes.space} />
      {compeleted ? (
        <Completed
          setCardDetails={setCardDetails}
          setCompleted={setCompleted}
        />
      ) : (
        <Form
          cardDetails={cardDetails}
          setCardDetails={setCardDetails}
          setCompleted={setCompleted}
        />
      )}
    </SimpleGrid>
  );
}

export default App;
