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
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 3rem 2rem;
`;

const FormHeading = styled.h4`
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const FormText = styled.p`
    width: 90%;
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
