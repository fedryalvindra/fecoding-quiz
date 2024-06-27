import { useQuiz } from "../../context/QuizContext";

import PaginationList from "./PaginationList";
import QuestionAndOption from "./QuestionAndOption";
import "./style/QuestionPage.css";

function Question() {
  const { selectedQuiz } = useQuiz();
  const quiz = selectedQuiz?.quiz;
  return (
    <div className="question-container">
      <PaginationList quiz={quiz} />
      <QuestionAndOption quiz={quiz} />
    </div>
  );
}

export default Question;
