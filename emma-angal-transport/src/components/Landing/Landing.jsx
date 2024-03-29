import { Container } from "../SharedComponents/SharedComponents.style";
import {
  LandingContainer,
  LandingHeading,
  LandingMainTextContainer,
  LandingText,
  LandingImage,
  AboutContainer,
  Heading,
  AboutText,
  TextContainer,
  AboutImage,
} from "./style/Landing.style";

const Landing = () => {
  return (
    <Container id="Home">
      <LandingContainer>
        <LandingMainTextContainer>
          <LandingHeading>
            Logistics <br /> Solutions
          </LandingHeading>
          <LandingText>
            Get Your Freight Moving with Confidence: Ground-Based Transportation
            Solutions You Can Count On
          </LandingText>
        </LandingMainTextContainer>
        <LandingImage src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1683532492/EmmaAngal/containers_km4jyt.png" alt="Logo"/>
        <AboutContainer>
          <TextContainer>
            <Heading>From Point A to Point B</Heading>
            <AboutText>
              We are guided by our core values of customer service, reliability,
              and sustainability. We strive to set ourselves apart from the
              competition by living these values every day. Our commitment to
              delivering the best possible outcomes for our clients is
              unwavering, whether we&#39;re handling a single package or managing
              complex supply chains.
            </AboutText>
          </TextContainer>
          <AboutImage src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1683569578/EmmaAngal/clipart1357525_suwzxp.png" alt="Shipping Containers"/>
        </AboutContainer>
      </LandingContainer>
    </Container>
  );
};

export default Landing;
