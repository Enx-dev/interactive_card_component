import React, { FormEvent, useState } from "react";
import {
  Box,
  Button,
  NumberInput,
  TextInput,
  Input,
  Group,
  Container,
  MantineProvider,
} from "@mantine/core";
import { theme, useStyles } from "./Styles";
import { CardDetails } from "../../App";
import { cc_format } from "../../utils/CreditCardFormat";
type Props = {
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  setCardDetails: React.Dispatch<React.SetStateAction<CardDetails>>;
  cardDetails: CardDetails;
};

const Form = ({ setCompleted, cardDetails, setCardDetails }: Props) => {
  const [dividedNumber, setNumber] = useState<string>("");
  const [yearError, setYearError] = useState("");
  const { classes } = useStyles();
  function handleCardNumber(e: string) {
    setNumber(e);
    setCardDetails((prev) => ({
      ...prev,
      CardNumber: e,
    }));
  }
  function handleCardName(e: string) {
    setCardDetails((prev) => ({
      ...prev,
      CardName: e,
    }));
  }
  function handleYYValidation(e: FormEvent) {
    e.preventDefault();
    const date = new Date();
    const currYear = date.getFullYear().toString().slice(2);

    if (+currYear > cardDetails.YY) {
      setYearError("Card expired");
    } else {
      setCompleted(true);
      setYearError("");
    }
  }

  return (
    <Container className={classes.container}>
      <MantineProvider inherit theme={theme}>
        <Box
          component="form"
          onSubmit={handleYYValidation}
          className={classes.box}>
          <TextInput
            autoFocus
            className={classes.input}
            label="Cardholder Name"
            placeholder="e.g. Jane Appleseed"
            required
            maxLength={20}
            onChange={(e) => handleCardName(e.target.value)}
          />
          <TextInput
            className={classes.input}
            label="Card Number"
            placeholder=" e.g. 1234 5678 9123 0000"
            maxLength={19}
            minLength={19}
            required
            value={cc_format(dividedNumber)}
            onChange={(e) => handleCardNumber(e.target.value)}
          />
          <Group className={classes.group1}>
            <Input.Wrapper
              className={classes.inputWrapper}
              required
              error={yearError}
              label="Exp.Date (MM/YY)">
              <Group className={classes.group2}>
                <NumberInput
                  placeholder="MM"
                  max={12}
                  maxLength={2}
                  hideControls
                  required
                  onChange={(e) =>
                    setCardDetails((prev) => ({
                      ...prev,
                      MM: e!,
                    }))
                  }
                />
                <NumberInput
                  placeholder="YY"
                  maxLength={2}
                  hideControls
                  required
                  onChange={(e) =>
                    setCardDetails((prev) => ({
                      ...prev,
                      YY: e!,
                    }))
                  }
                />
              </Group>
            </Input.Wrapper>
            <NumberInput
              className={classes.input}
              sx={{ width: "100%" }}
              placeholder="e.g 123"
              maxLength={3}
              minLength={3}
              label="CVC"
              hideControls
              required
              onChange={(e) =>
                setCardDetails((prev) => ({
                  ...prev,
                  CVC: e?.toString()!,
                }))
              }
            />
          </Group>
          <Button type="submit" className={classes.btn}>
            Confirm
          </Button>
        </Box>
      </MantineProvider>
    </Container>
  );
};

export default Form;
