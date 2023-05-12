import { LogoContainer } from "@/components/nav/style/nav.styles";
import { media } from "@/styles/media";
import styled from "styled-components";

const FooterContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  border-top: 1px solid grey;
  display: flex;
  justify-content: space-evenly;

  @media ${media.mobile} {
    flex-direction: column;
    gap: 1rem;
  }

`;

const ContactContainer = styled.div`
  flex-direction: column;
  display: flex;
`;

const ContactHeader = styled.h6`
font-weight: 700;
margin-bottom: .4rem;
`

const ContactText = styled.p`
font-weight: 400;
font-size: .6rem;
margin: .2rem 0;
`

const FooterLinksContainer = styled.div`
    display: flex;
    flex-grow: 2;
    gap: 5rem;

    @media ${media.tablet} {   
        display: none;
    }


`

const CCText = styled.p`
    text-align: center;
    font-size: .7rem;
    padding-bottom: 1rem;
`

const FooterLogo = styled(LogoContainer)`
    @media ${media.mobile} {
        margin: 0;
    }
`


export { FooterContainer, ContactContainer, ContactHeader, ContactText, FooterLinksContainer, CCText, FooterLogo };
