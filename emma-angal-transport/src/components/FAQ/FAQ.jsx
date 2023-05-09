import { Heading } from "../Landing/style/Landing.style";
import { Container } from "../SharedComponents/SharedComponents.style";
import { FAQContainer } from "./style/FAQ.style";
import { QnA } from "./QnA";
import QuestionDropDown from "./QuestionDropDown";
import MailFormSubscription from "../MailForm/MailFormSubscription";

const FAQ = () => {
  return (
    <Container bgColour={"#F3F6FE"}>
      <FAQContainer>
        <Heading>Frequently Asked Questions</Heading>
        {QnA.map((question, index) => {
          return (
            <QuestionDropDown
              question={question.question}
              answer={question.answer}
              key={index}
            />
          );
        })}
      </FAQContainer>
      <MailFormSubscription />
    </Container>
  );
};

export default FAQ;
