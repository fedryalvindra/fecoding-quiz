import { useQuiz } from "../../context/QuizContext";

function Card({ card }) {
  const { hoverQuiz, dispatch } = useQuiz();
  return (
    <div
      className="card"
      style={{
        backgroundColor:
          hoverQuiz === card.id ? "rgb(194, 194, 194)" : card.color,
      }}
      onClick={() => dispatch({ type: "selectQuiz", payload: card })}
      onMouseEnter={() => dispatch({ type: "hoverQuiz", payload: card.id })}
      onMouseLeave={() => dispatch({ type: "unHoverQuiz" })}
    >
      <h1>{card.title}</h1>
      <p>{card.description}</p>
    </div>
  );
}

export default Card;
