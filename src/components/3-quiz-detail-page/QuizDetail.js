import QuizDescription from "./QuizDescription";
import Back from "../Buttons/Back";
import "./style/QuizDetailPage.css";
import { useQuiz } from "../../context/QuizContext";

function QuizDetail() {
  const { name } = useQuiz();
  return (
    <div className="quiz-detail-container">
      <Back page={"backToFillNamePage"} />
      <div className="quiz-detail-content-container">
        <div className="quiz-detail-content">
          <h1>
            Hello <span style={{ color: "#94FFD8" }}>{name}</span>
          </h1>
          <QuizDescription />
        </div>
      </div>
    </div>
  );
}

export default QuizDetail;
