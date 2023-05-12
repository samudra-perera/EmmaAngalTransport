import React, { useState } from "react";
import {
  MailFormContainer,
  TextContainer,
  FormHeading,
  FormText,
  InputContainer,
  FormContainer,
  SubmitButton,
  EmailInput,
} from "./style/MailForm.style";
//Add Error Messages

const MailForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  //Handling the Form Submission
  const handleSubmission = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });
    //On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  //Handle the Input Key Event
  const handleInputKeyEvent = (e) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (e.keyCode === 13) {
      // Cancel the default action, if needed
      e.preventDefault();
      // Trigger the button element with a click
      handleSubmission();
    }
  };

  // Extract Message from the string and clean the status code
  const getMessage = (message) => {
    if (!message) {
      return null;
    }

    return message.slice(3);
  };

  const replyMessage = getMessage(message);

  return (
    <MailFormContainer>
      <TextContainer>
        <FormHeading>Lets Connect!</FormHeading>
        <FormText>
          Whether you&#39;re interested in our services, have a question, or just
          want to say hello, we&#39;re here to listen. Use this form to start the
          conversation.
        </FormText>
      </TextContainer>
      <InputContainer>
        <FormContainer>
          <EmailInput
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value ?? " ")}
            onKeyUp={(e) => handleInputKeyEvent(e)}
          ></EmailInput>
          <SubmitButton onClick={handleSubmission}>Subscribe</SubmitButton>
        </FormContainer>
      </InputContainer>
    </MailFormContainer>
  );
};

export default MailForm;
