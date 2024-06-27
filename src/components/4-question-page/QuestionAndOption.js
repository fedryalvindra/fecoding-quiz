import { useQuiz } from "../../context/QuizContext";
import AnswerButton from "./AnswerButton";
import OptionList from "./OptionList";

function QuestionAndOption({ quiz }) {
  const { noQuestion } = useQuiz();
  const question = quiz.at(noQuestion);

  return (
    <div className="question">
      <div className="question-answer">
        <h1>
          {noQuestion + 1}. {question.question}
        </h1>
        <OptionList question={question} />
      </div>
      <AnswerButton quiz={quiz} question={question} />
    </div>
  );
}

export default QuestionAndOption;
