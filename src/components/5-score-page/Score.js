import { useQuiz } from "../../context/QuizContext";
import Button from "../Buttons/Button";
import "./ScorePage.css";

function Score() {
  const { name, score, totalQuiz, dispatch } = useQuiz();

  return (
    <div className="score-container">
      <div className="correct-answer">
        <h5>Correct answer</h5>
        <p>
          {score}/{totalQuiz}
        </p>
      </div>
      <div className="score-card">
        <p>Your Score</p>
        <h1>
          <span style={{ color: "#94ffd8" }}>{score * 10}</span>/
          {totalQuiz * 10}
        </h1>
        <p>Thank you {name} for participating on my quiz</p>
      </div>
      <div className="buttons score-buttons">
        <Button onClick={() => dispatch({ type: "backToLandingPage" })}>
          Back
        </Button>
        <div>
          <Button onClick={() => dispatch({ type: "retryQuiz" })}>Retry</Button>
          {score >= totalQuiz && (
            <Button onClick={() => dispatch({ type: "certificatePage" })}>
              View Certificate
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Score;
