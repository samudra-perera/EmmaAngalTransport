import { media } from "@/styles/media";
import styled from "styled-components";

const ServicesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  padding-top: 3rem;
`;
const CardContainer = styled.div`
margin-top: 2rem;
gap: 1.25rem;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

@media ${media.mobile} {
  gap: 0;
  margin-top: 0;
}

`;

const Card = styled.div`
width: 30%;
min-width: 300px;
background-color: #F3F6FE;
padding: 1rem;
margin: 1rem auto 2rem auto;
display: flex;
flex-direction: column;
align-items: center;
min-height: 300px;

@media ${media.laptop} {
  width: 40%;
  padding: .5rem;
}

@media ${media.tablet} {
  padding: 0.25rem;
}
`;

const CardIcon = styled.img`
height: 60px;
width: 60px;
margin: 2rem 0;

@media ${media.tablet} {
  height: 45px;
  width: 45px;
}

`;

const CardHeading = styled.h6`
font-weight: 700;
font-size: 1.3rem;
margin-bottom: 2rem;

@media ${media.laptop} {
  font-size: 1.2rem;
}

@media ${media.tablet} {
  font-size: 1.1rem;
   margin-bottom: 1.2rem;
}

`;

const CardText = styled.p`
font-size: .9rem;
padding: 0 2rem 2rem 2rem;

@media ${media.laptop} {
  font-size: .8rem;
}
`;


export {
  ServicesContainer,
  Card,
  CardIcon,
  CardHeading,
  CardText,
  CardContainer,
};
