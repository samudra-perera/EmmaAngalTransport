import { Container } from "../SharedComponents/SharedComponents.style";
import {
  CCText,
  ContactContainer,
  ContactHeader,
  ContactText,
  FooterContainer,
  FooterLinksContainer,
} from "./Style/Footer.style";
import {
  LogoContainer,
  NavLinks,
  Logo,
  LogoText,
} from "../nav/style/nav.styles";

const Footer = () => {
  return (
    <Container bgColour={"#F3F6FE"}>
      <FooterContainer>
        <LogoContainer>
          <NavLinks>
            <Logo
              src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1683518437/EmmaAngal/LogoEAT_wrrgin.png"
              alt="EATransport Logo"
            />
            <LogoText>EATransport</LogoText>
          </NavLinks>
        </LogoContainer>
        <FooterLinksContainer>
          <NavLinks>Home</NavLinks>
          <NavLinks>About</NavLinks>
          <NavLinks>Service</NavLinks>
        </FooterLinksContainer>
        <ContactContainer>
          <ContactHeader>Contact</ContactHeader>
          <ContactText>emmaangaltransportservice@gmail.com</ContactText>
          <ContactText>416-990-0033</ContactText>
        </ContactContainer>
      </FooterContainer>
      <CCText>Copyright © 2023 EmmaAngal | All rights reserved.</CCText>
    </Container>
  );
};

export default Footer;
