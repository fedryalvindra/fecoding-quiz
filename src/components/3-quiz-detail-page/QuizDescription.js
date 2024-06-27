import QuizDescriptionLayout from "./QuizDescriptionLayout.js";
import Button from "../Buttons/Button.js";
import { useQuiz } from "../../context/QuizContext.js";

function QuizDescription() {
  const { selectedQuiz, dispatch } = useQuiz();
  
  return (
    <div className="quiz-description-container">
      <div className="quiz-description">
        <QuizDescriptionLayout>
          <h4>Level quiz</h4>
          <h2>{selectedQuiz.title}</h2>
        </QuizDescriptionLayout>
        <QuizDescriptionLayout>
          <h4>Total</h4>
          <h2>{selectedQuiz.quiz.length}</h2>
        </QuizDescriptionLayout>
        <QuizDescriptionLayout>
          <h4>Description</h4>
          <h2>{selectedQuiz.quizDescription}</h2>
        </QuizDescriptionLayout>
        <p>
          <strong>⚠ All answers must be correct to get a certificate</strong>
        </p>
      </div>
      <Button onClick={() => dispatch({ type: "startQuiz" })}>Start</Button>
    </div>
  );
}

export default QuizDescription;
