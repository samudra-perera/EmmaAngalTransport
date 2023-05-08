import {
  NavHeading,
  NavContainer,
  LogoContainer,
  LinksContainer,
  ContactUsButton,
  Logo,
  LogoText,
  NavLinks,
  ButtonContainer,
} from "./style/nav.styles";
import { Container } from "../SharedComponents/SharedComponents.style";

const Nav = () => {
  return (
    <Container bgColour={"#F3F6FE"}>
      <NavContainer>
        <LogoContainer>
          <NavLinks href="/">
            <Logo src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1683518437/EmmaAngal/LogoEAT_wrrgin.png" />
            <LogoText>EATransport</LogoText>
          </NavLinks>
        </LogoContainer>
        <LinksContainer>
          <NavLinks>Home</NavLinks>
          <NavLinks>About</NavLinks>
          <NavLinks>Service</NavLinks>
        </LinksContainer>
        <ButtonContainer>
          <ContactUsButton>Contact Us</ContactUsButton>
        </ButtonContainer>
      </NavContainer>
    </Container>
  );
};

export default Nav;
