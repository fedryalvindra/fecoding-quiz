import Option from "./Option";

function OptionList({ question, dispatch, hoverQuiz, curAnswer }) {
  return (
    <ul className="option">
      {question.option.map((option, i) => (
        <Option
          key={option}
          option={option}
          hoverQuiz={hoverQuiz}
          i={i}
          curAnswer={curAnswer}
          dispatch={dispatch}
          question={question}
        />
      ))}
    </ul>
  );
}

export default OptionList;
