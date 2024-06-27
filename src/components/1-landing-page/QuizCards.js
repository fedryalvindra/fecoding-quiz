import QuizDifficultLevel from "./QuizDifficultLevel.js";
import Cards from "./Cards.js";
import Description from "./Description.js";
import "./style/LandingPage.css";

function QuizCards() {
  return (
    <div className="quiz-cards">
      <QuizDifficultLevel />
      <Cards />
      <Description />
    </div>
  );
}

export default QuizCards;
