import React from "react";
import { Container } from "../SharedComponents/SharedComponents.style";
import {
  ServicesContainer,
  Card,
  CardIcon,
  CardHeading,
  CardText,
  CardContainer,
} from "./style/Services.style";
import { Heading } from "../Landing/style/Landing.style";
import { ContactUsButton } from "../nav/style/nav.styles";
import { CardInfo } from "./ServicesData";

const Services = () => {
  return (
    <Container bgColour={"#7EB4FB"}>
      <ServicesContainer>
        <Heading>We Have Everything You Need</Heading>
        <CardContainer>
          {CardInfo.map((card, index) => {
            return (
              <Card key={index}>
                <CardIcon src={card.iconUrl} />
                <CardHeading>{card.heading}</CardHeading>
                {index === 5 ? (
                  <ContactUsButton tablet={'flex'}>Contact Us</ContactUsButton>
                ) : (
                  <CardText>{card.explanation}</CardText>
                )}
              </Card>
            );
          })}
        </CardContainer>
      </ServicesContainer>
    </Container>
  );
};

export default Services;
