import Button from "../Buttons/Button";
import OptionList from "./OptionList";
import PaginationList from "./PaginationList";
import "./style/QuestionPage.css";

function Question({
  quiz,
  totalQuiz,
  question,
  noQuestion,
  dispatch,
  hoverQuiz,
  curAnswer,
}) {
  const isDone =
    quiz.filter((question) => question.answered).length === quiz.length;
  const isSelectOption = curAnswer?.some(
    (answer) => answer?.quizID === question?.quizID
  );

  return (
    <div className="question-container">
      <PaginationList
        question={question}
        quiz={quiz}
        totalQuiz={totalQuiz}
        dispatch={dispatch}
        noQuestion={noQuestion}
        curAnswer={curAnswer}
      />
      <div className="question">
        <div className="question-answer">
          <h1>
            {noQuestion + 1}. {question.question}
          </h1>
          <OptionList
            question={question}
            dispatch={dispatch}
            hoverQuiz={hoverQuiz}
            curAnswer={curAnswer}
          />
        </div>
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
      </div>
    </div>
  );
}

export default Question;
