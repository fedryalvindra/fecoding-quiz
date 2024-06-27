import { useQuiz } from "../../context/QuizContext";

function Pagination({ quiz, num }) {
  const { dispatch, noQuestion, curAnswer } = useQuiz();
  const isAnswered = curAnswer.some(
    (answer) => answer?.quizID === quiz.at(num - 1).quizID
  );
  const checkAnswer = quiz.at(num - 1).answered;
  const answerIndex = curAnswer.findIndex(
    (answer) => answer?.quizID === quiz.at(num - 1).quizID
  );
  const checkCorrectAnswer =
    quiz.at(num - 1).correctAnswer !== curAnswer?.at(answerIndex)?.answer;

  function validatePagStyle(type) {
    if (type === "color")
      return checkAnswer
        ? "#ffffff"
        : isAnswered
        ? "rgb(181,181,181)"
        : noQuestion + 1 === num
        ? "#a3d8ff"
        : "#ff76ce";
    if (type === "border")
      return (
        noQuestion + 1 === num &&
        `2px solid ${
          checkAnswer && !checkCorrectAnswer
            ? "#94FFD8"
            : checkAnswer && checkAnswer
            ? "#f00"
            : isAnswered
            ? "rgb(181,181,181)"
            : "#a3d8ff"
        }`
      );
    if (type === "background")
      return checkAnswer && !checkCorrectAnswer
        ? "#94FFD8"
        : checkAnswer && checkAnswer
        ? "#f00"
        : "#ffffff";
  }

  return (
    <li
      style={{
        color: validatePagStyle("color"),
        border: validatePagStyle("border"),
        backgroundColor: validatePagStyle("background"),
      }}
      key={num}
      onClick={() => dispatch({ type: "changeQuestion", payload: num })}
    >
      {num}
    </li>
  );
}

export default Pagination;
