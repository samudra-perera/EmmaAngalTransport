import React, { useState } from "react";
import {
  QuestionContainer,
  QuestionText,
  AnswerContainer,
  AnswerText,
  QuestionHeadingContainer,
} from "./style/FAQ.style";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

const QuestionDropDown = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <QuestionContainer onClick={() => setActive(!active)} colour={active ? 'black' : 'white'}>
        <QuestionHeadingContainer>
          <QuestionText colour={active ? 'white' : 'black'}>{question}</QuestionText>
          {active ? (
            <FiArrowUpRight size={"30px"} color="white" />
          ) : (
            <FiArrowDownRight size={"30px"} />
          )}
        </QuestionHeadingContainer>
        {active && <AnswerText>{answer}</AnswerText>}
      </QuestionContainer>
    </>
  );
};

export default QuestionDropDown;
