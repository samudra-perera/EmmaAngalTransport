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

export {
  LandingContainer,
  LandingHeading,
  LandingMainTextContainer,
  LandingText,
  LandingImage
};
