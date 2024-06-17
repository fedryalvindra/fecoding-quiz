import QuizDescription from "./QuizDescription";
import Back from "../Buttons/Back";
import "./style/QuizDetailPage.css";

function QuizDetail({ selectedQuiz, name, dispatch }) {
  return (
    <div className="quiz-detail-container">
      <Back dispatch={dispatch} page={"backToFillNamePage"} />
      <div className="quiz-detail-content-container">
        <div className="quiz-detail-content">
          <h1>
            Hello <span style={{ color: "#94FFD8" }}>{name}</span>
          </h1>
          <QuizDescription selectedQuiz={selectedQuiz} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default QuizDetail;
