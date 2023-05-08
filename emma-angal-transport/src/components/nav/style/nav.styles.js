import styled from "styled-components";
import { media } from "@/styles/media";

const NavHeading = styled.h3`
  font-weight: 700;
  margin: 0;
`;

const Container = styled.div`

`

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
`;

const Logo = styled.img`
  height: 20px;
  width: 45px;
`;

const LogoText = styled.h6`
  font-weight: 700;
  font-size: 1.1rem;
`;

const LinksContainer = styled.div`
display: flex;
justify-content: space-around;
flex-grow: 3;
`;

const NavLinks = styled.a`
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
`

const ContactUsButton = styled.a`
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  border: 2px solid black;
  padding: .5rem .75rem;

  &:hover {
    background-color: black;
    color: #F3F6FE;
  }

`;

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
  ButtonContainer
};
