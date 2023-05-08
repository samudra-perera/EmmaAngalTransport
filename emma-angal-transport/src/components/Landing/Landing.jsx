import { Container } from "../SharedComponents/SharedComponents.style";
import {
  LandingContainer,
  LandingHeading,
  LandingMainTextContainer,
  LandingText,
  LandingImage
} from "./style/Landing.style";

const Landing = () => {
  return (
    <Container>
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
        <LandingImage src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1683532492/EmmaAngal/containers_km4jyt.png"/>
      </LandingContainer>
    </Container>
  );
};

export default Landing;
