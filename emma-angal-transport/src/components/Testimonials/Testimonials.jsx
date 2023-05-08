import { Container } from "../SharedComponents/SharedComponents.style";
import {
  TestimonialContainer,
  TestimonialCardContainer,
  QuoteImage,
  TestimonialText,
  AvatarContainer,
  AvatarName,
  Avatar,
  TestimonialButton,
  ButtonContainer,
  AvatarContentContainer,
} from "./Style/Testimonials.style";
import { Heading } from "../Landing/style/Landing.style";
import { client } from "./ClientData";
import { useState } from "react";

const Testimonials = () => {
  const [tab, setTab] = useState(0);

  return (
    <Container>
      <TestimonialContainer>
        <Heading>What Our Clients Say About Us</Heading>
        <TestimonialCardContainer>
          <QuoteImage src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1683583710/EmmaAngal/quotes_atvusm.png" />
          <TestimonialText>{client[tab].testimonial}</TestimonialText>
          <AvatarContainer>
            <AvatarContentContainer>
              <Avatar src={client[tab].avatarURL} />
              <AvatarName>{client[tab].name}</AvatarName>
            </AvatarContentContainer>
            <ButtonContainer>
              {client.map((card, index) => {
                return (
                  <TestimonialButton
                    key={index}
                    onClick={() => setTab(index)}
                    selected={tab === index ? "gray" : "black"}
                  />
                );
              })}
            </ButtonContainer>
          </AvatarContainer>
        </TestimonialCardContainer>
      </TestimonialContainer>
    </Container>
  );
};

export default Testimonials;
