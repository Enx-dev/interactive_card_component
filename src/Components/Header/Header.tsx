import React from "react";
import { BackgroundImage, Box, Container } from "@mantine/core";
import Cardfront from "./Cards/Front/Cardfront";
import Cardback from "./Cards/Back/Cardback";
import { CardDetails } from "../../App";
import { useStyles } from "./Styles";
type Props = {
  setCardDetails: React.Dispatch<React.SetStateAction<CardDetails>>;
  cardDetails: CardDetails;
};

const Header = ({ cardDetails }: Props) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.header__Box}>
      <BackgroundImage
        className={classes.header__BI}
        src="/images/bg-main-mobile.png">
        {" "}
        <Container className={classes.header__Container}>
          <Cardback cvc={cardDetails.CVC} />
          <Cardfront
            name={cardDetails.CardName}
            number={cardDetails.CardNumber}
            MM={cardDetails.MM}
            YY={cardDetails.YY}
          />
        </Container>
      </BackgroundImage>
    </Box>
  );
};

export default Header;
