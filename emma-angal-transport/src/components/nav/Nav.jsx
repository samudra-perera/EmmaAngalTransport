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
import { Container } from "../SharedComponents/SharedComponents.style";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container
      bgColour={"#F3F6FE"}
      style={{ position: "fixed", top: "0", width: "100%", zIndex: '100'}}
    >
      <NavContainer>
        <LogoContainer>
          <NavLinks>
            <Logo
              src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1683518437/EmmaAngal/LogoEAT_wrrgin.png"
              alt="EATransport Logo"
            />
            <LogoText>EATransport</LogoText>
          </NavLinks>
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
            {" "}
            <MobileLinks>Home</MobileLinks>
            <MobileLinks>About</MobileLinks>
            <MobileLinks>Service</MobileLinks>
            <MobileLinks>Contact Us</MobileLinks>
          </MobileNavLinks>
        ) : (
          <></>
        )}

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
