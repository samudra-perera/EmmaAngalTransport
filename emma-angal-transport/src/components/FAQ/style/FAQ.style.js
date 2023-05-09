import styled from "styled-components";

const FAQContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`;

const QuestionContainer = styled.div`
  background-color: ${props => props.colour || 'white'};
  width: 100%;
  margin: 1rem;
  padding: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 0;
`;

const QuestionText = styled.h6`
  font-weight: 700;
  font-size: 1.3rem;
  color: ${props => props.colour || 'black'};
`;

const QuestionHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AnswerText = styled.p`
  font-size: 1.1rem;
  padding-top: .5rem;
  color: white;
`;

const AnswerContainer = styled.div``;

export {
  FAQContainer,
  QuestionContainer,
  QuestionText,
  AnswerText,
  AnswerContainer,
  QuestionHeadingContainer
};
