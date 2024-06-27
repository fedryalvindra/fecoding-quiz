import { useQuiz } from "../../context/QuizContext";

function Option({ option, i, question }) {
  const { hoverQuiz, curAnswer, dispatch } = useQuiz();
  return (
    <li
      style={{
        backgroundColor: question.answered
          ? i === question.correctAnswer
            ? "#94FFD8"
            : "#F00"
          : hoverQuiz === i
          ? "rgb(231,231,231)"
          : curAnswer.some((answer) => answer.selectedOption === option)
          ? "rgb(181,181,181)"
          : "#ffffff",
        color: question.answered
          ? "#ffffff"
          : curAnswer.some((answer) => answer.selectedOption === option) &&
            "#ffffff",
      }}
      onMouseEnter={() => dispatch({ type: "hoverQuiz", payload: i })}
      onMouseLeave={() => dispatch({ type: "unHoverQuiz" })}
      onClick={() =>
        !question.answered &&
        dispatch({
          type: "clickAnswer",
          payload: {
            quizID: question.quizID,
            answer: i,
            selectedOption: option,
          },
        })
      }
    >
      {option}
    </li>
  );
}

export default Option;
