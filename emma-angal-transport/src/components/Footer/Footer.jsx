import { Container } from "../SharedComponents/SharedComponents.style";
import {
  CCText,
  ContactContainer,
  ContactHeader,
  ContactText,
  FooterContainer,
  FooterLinksContainer,
  FooterLogo,
} from "./Style/Footer.style";
import {
  LogoContainer,
  NavLinks,
  Logo,
  LogoText,
} from "../nav/style/nav.styles";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <Container bgColour={"#F3F6FE"}>
      <FooterContainer>
        <FooterLogo>
          <Link to="Home" spy={true} smooth={true} offset={-25} duration={500}>
            <NavLinks>
              <Logo
                src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1683518437/EmmaAngal/LogoEAT_wrrgin.png"
                alt="EATransport Logo"
              />
              <LogoText>EATransport</LogoText>
            </NavLinks>
          </Link>
        </FooterLogo>
        <FooterLinksContainer>
          {/* <Link
            to="Service"
            spy={true}
            smooth={true}
            offset={-25}
            duration={500}
          >
            <NavLinks>Service</NavLinks>
          </Link>
          <Link
            to="Testimonials"
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}
          >
            <NavLinks>Testimonials</NavLinks>
          </Link>
          <Link to={"FAQ"} spy={true} smooth={true} offset={-25} duration={500}>
            <NavLinks>FAQ</NavLinks>
          </Link> */}
        </FooterLinksContainer>
        <ContactContainer>
          <ContactHeader>Contact</ContactHeader>
          <ContactText>emmaangaltransportservice@gmail.com</ContactText>
          <ContactText>905-843-9749</ContactText>
        </ContactContainer>
      </FooterContainer>
      <CCText>Copyright © 2023 EmmaAngal | All rights reserved.</CCText>
    </Container>
  );
};

export default Footer;
