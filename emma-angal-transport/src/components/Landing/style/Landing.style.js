import styled from "styled-components";

const LandingContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
`;

const LandingHeading = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 6.25rem;
  line-height: 6rem;
`;

const LandingText = styled.p`
  font-weight: 400;
  width: 30%;
  text-align: right;
`;

const LandingMainTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const LandingImage = styled.img`
`

const AboutContainer = styled.div`
margin-top: 6rem;
display: flex;
flex-grow: 2;
justify-content: space-between;
`

const AboutText = styled.p`
font-weight: 400;
line-height: 2.5rem;
font-size: 1.1rem;
`

const Heading = styled.h3`
font-weight: 600;
font-size: 2rem;
margin-bottom: 1rem;
`

const AboutImage = styled.img`
width: 300px;
height: auto;
`

const TextContainer = styled.div`
width: 50%;
`

export {
  LandingContainer,
  LandingHeading,
  LandingMainTextContainer,
  LandingText,
  LandingImage,
  AboutContainer, 
  AboutText,
  Heading,
  TextContainer,
  AboutImage
};
