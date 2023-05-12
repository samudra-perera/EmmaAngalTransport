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
  HamburgerContainer,
  MobileNavLinks,
  MobileLinks,
} from "./style/nav.styles";
import { Link } from "react-scroll";
import { Container } from "../SharedComponents/SharedComponents.style";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container
      bgColour={"#F3F6FE"}
      style={{ position: "fixed", top: "0", width: "100%", zIndex: "100" }}
    >
      <NavContainer>
        <LogoContainer>
          <Link
            to="Home"
            spy={true}
            smooth={true}
            offset={-25}
            duration={500}
          >
            <NavLinks>
              <Logo
                src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1683518437/EmmaAngal/LogoEAT_wrrgin.png"
                alt="EATransport Logo"
              />
              <LogoText>EATransport</LogoText>
            </NavLinks>
          </Link>
        </LogoContainer>
        <HamburgerContainer>
          {open ? (
            <RxCross2 size={"30px"} onClick={() => setOpen(false)} />
          ) : (
            <RxHamburgerMenu size={"30px"} onClick={() => setOpen(true)} />
          )}
        </HamburgerContainer>
        {open ? (
          <MobileNavLinks>
            <Link
              to="Service"
              spy={true}
              smooth={true}
              offset={-25}
              duration={500}
            >
              <MobileLinks>Service</MobileLinks>
            </Link>
            <Link
              to="Testimonials"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
            >
              <MobileLinks>Testimonials</MobileLinks>
            </Link>
            <Link
              to={"FAQ"}
              spy={true}
              smooth={true}
              offset={-25}
              duration={500}
            >
              <MobileLinks>FAQ</MobileLinks>
            </Link>
            <MobileLinks>Contact Us</MobileLinks>
          </MobileNavLinks>
        ) : (
          <></>
        )}

        <LinksContainer>
          <Link
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
          </Link>
        </LinksContainer>
        <ButtonContainer>
          <ContactUsButton href="mailto:emmaangaltransportservice@gmail.com">
            Contact Us
          </ContactUsButton>
        </ButtonContainer>
      </NavContainer>
    </Container>
  );
};

export default Nav;
