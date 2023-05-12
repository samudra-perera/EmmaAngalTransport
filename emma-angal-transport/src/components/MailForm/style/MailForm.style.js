import { media } from "@/styles/media";
import styled from "styled-components";

const MailFormContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  margin-top: 8rem;
  background-color: #ffcb34;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${media.tablet} {
    margin-top: 5rem;
    flex-direction: column;
    padding-bottom: 2rem;
  }

  @media ${media.mobile} {
    margin-top: 3rem;
  }

`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 3rem 2rem;

  @media ${media.tablet} {
    padding: 1rem;
    width: 100%;
  }

`;

const FormHeading = styled.h4`
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 1rem;

  @media ${media.tablet} {
    font-size: 1.5rem;
  }

`;

const FormText = styled.p`
    width: 90%;

    @media ${media.tablet} {
        width: 100%;
        font-size: .9rem;
    }

`;

const InputContainer = styled.div`
  width: 50%;
  width: fit-content;
  display: flex;
  justify-content: center;
`;

const FormContainer = styled.div`
    background-color: white;
    padding: 1rem 1.5rem;
    display: flex;

    @media ${media.tablet} {
        padding: .5rem 1rem;
    }

`

const EmailInput = styled.input`
    width: 250px;
    font-size: 1rem;
    border: none;
    :focus {
        outline: none;
    }    
`

const SubmitButton = styled.button`
    background-color: black;
    color: white;
    border: none;
    padding: 1rem 1.5rem;
    cursor: pointer;

    &:hover {
        background-color: #2D2D2D;
    }

    @media ${media.tablet} {
        padding: .5rem .75rem;
        font-size: .9rem;
    }

`

export {
  MailFormContainer,
  TextContainer,
  FormHeading,
  FormText,
  InputContainer,
  FormContainer,
  EmailInput,
  SubmitButton
};
