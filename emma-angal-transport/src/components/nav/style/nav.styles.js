import styled from "styled-components";
import { media } from "@/styles/media";

const NavHeading = styled.h3`
  font-weight: 700;
  margin: 0;
`;

const Container = styled.div`
`;

const NavContainer = styled.div`
  background-color: #f3f6fe;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
`;

//Container for the logo
const LogoContainer = styled.div`
  display: flex;
  flex-grow: 2;

  @media ${media.tablet} {
    margin-left: 1rem;
  }
`;

const Logo = styled.img`
  height: 20px;
  width: 45px;
`;

const LogoText = styled.p`
  font-weight: 700;
  font-size: 1.1rem;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 3;

  @media ${media.tablet} {
    display: none;
  }
`;

const HamburgerContainer = styled.div`
  display: none;

  @media ${media.tablet} {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-right: 1rem;
  }
`;

const NavLinks = styled.p`
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #000;
`;

const ButtonContainer = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: flex-end;
`;

const ContactUsButton = styled.a`
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  border: 2px solid black;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: black;
    color: #f3f6fe;
  }

  @media ${media.tablet} {
    display: ${props => props.tablet || 'none;'};
  }
`;

const MobileNavLinks = styled.div`
display: none;
@media ${media.tablet} {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 62px;
  width: 100%;
  left: 0;
  background-color: #f3f6fe;
}
`

const MobileLinks = styled.p`
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #000;
  padding: 1rem 0;
`

export {
  NavHeading,
  NavContainer,
  LogoContainer,
  LinksContainer,
  ContactUsButton,
  Logo,
  LogoText,
  NavLinks,
  Container,
  ButtonContainer,
  HamburgerContainer,
  MobileNavLinks,
  MobileLinks
};
