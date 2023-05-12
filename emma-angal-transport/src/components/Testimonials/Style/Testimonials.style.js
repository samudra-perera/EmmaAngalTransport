import { media } from "@/styles/media";
import styled from "styled-components";

const TestimonialContainer = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
  padding: 1rem;
`;

const TestimonialCardContainer = styled.div`
  background-color: #7eb4fb;
  padding: 3rem 5rem;
  margin-top: 2rem;

  @media ${media.tablet} {
    padding: 3rem;
  }

`;

const QuoteImage = styled.img`
  height: 65px;
  width: 65px;

  @media ${media.mobile} {
    height: 40px;
    width: 40px;
  }

`;

const TestimonialText = styled.p`
  width: 90%;
  padding-top: 2rem;
  padding-bottom: 3rem;

  @media ${media.tablet} {
    font-size: .9rem;
  }

  @media ${media.mobile} {
    font-size: .8rem;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
  }

`;

const AvatarContainer = styled.div`
    padding-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${media.tablet} {
        padding-left: 1rem;
    }

    @media ${media.mobile} {
        padding-left: 0;
    }
`;

const Avatar = styled.img`
    height: 80px;
    width: 80px;
    margin-right: 1.5rem;

@media ${media.tablet} {
    height: 60px;
    width: 60px;
    margin-right: 1rem;
}

@media ${media.mobile} {
    height: 50px;
    width: 50px;
}

`;
const AvatarName = styled.span`
    font-size: .8rem;
`

const AvatarContentContainer = styled.div`
display: flex;
align-items: center;
`

const TestimonialButton = styled.a`
    height: 15px;
    width: 15px;
    background-color: ${props => props.selected || 'black'};
    display: block;
    margin: .2rem;
    cursor: pointer;
`

const ButtonContainer = styled.div`
    display: flex;

`

export {
  TestimonialContainer,
  TestimonialCardContainer,
  QuoteImage,
  TestimonialText,
  AvatarContainer,
  Avatar,
  AvatarName,
  TestimonialButton,
  ButtonContainer,
  AvatarContentContainer
};
