import { media } from "@/styles/media";
import styled from "styled-components";

const LandingContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 6rem;
  margin-top: 5rem;
  position: relative;

  @media ${media.tablet} {
    margin-top: 2rem;
  }

`;

const LandingHeading = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 6.25rem;
  line-height: 6rem;

  @media ${media.laptop} {
    font-size: 5rem;
    line-height: 5.25rem;
  }

  @media ${media.tablet} {
    font-size: 4rem;
    line-height: 4.25rem;
  }
  
`;

const LandingText = styled.p`
  font-weight: 400;
  width: 30%;
  text-align: right;

  @media ${media.laptop} {
    font-size: .9rem;
  }

  @media ${media.tablet} {
    text-align: left;
    width: 70%;
  }

`;

const LandingMainTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 3rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;

  @media ${media.tablet} {
    flex-direction: column;
    align-items: start;
  }

`;

const LandingImage = styled.img`
  position: relative;
  z-index: 4;
`;

const AboutContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-grow: 2;
  justify-content: space-between;

  @media ${media.tablet} {
    flex-direction: column;
    align-items: center;
  }

`;

const AboutText = styled.p`
  font-weight: 400;
  line-height: 2.5rem;
  font-size: 1.1rem;
`;

const Heading = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutImage = styled.img`
  width: 300px;
  height: auto;
`;

const TextContainer = styled.div`
  width: 50%;


  @media ${media.tablet} {
    width: 100%;
  }
`;

const ColouredBox = styled.div`
  position: absolute;
  z-index: -10;
  background-color: ${props => props.colour || 'red'};
  width: 1000px;
  height: 500px;
  left: -200px;
  top: 90px;
`;

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
  AboutImage,
  ColouredBox,
};
