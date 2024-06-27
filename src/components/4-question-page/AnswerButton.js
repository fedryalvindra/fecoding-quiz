import { useQuiz } from "../../context/QuizContext";
import Button from "../Buttons/Button";

function AnswerButton({ quiz, question }) {
  const { curAnswer, dispatch, noQuestion } = useQuiz();
  const isDone =
    quiz.filter((question) => question.answered).length === quiz.length;
  const isSelectOption = curAnswer?.some(
    (answer) => answer?.quizID === question?.quizID
  );

  return (
    <div className="buttons">
      <Button onClick={() => dispatch({ type: "prevQuestion" })}>
        Previous
      </Button>
      <div>
        {!question.answered && isSelectOption && (
          <Button
            onClick={() =>
              dispatch({
                type: "saveAnswer",
                payload: { quizID: question.quizID },
              })
            }
          >
            Save
          </Button>
        )}
        {isDone && (
          <Button onClick={() => dispatch({ type: "submitQuiz" })}>
            Submit
          </Button>
        )}
        {noQuestion + 1 !== quiz.length && (
          <Button onClick={() => dispatch({ type: "nextQuestion" })}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export default AnswerButton;
