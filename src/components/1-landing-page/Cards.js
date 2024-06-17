import Card from "./Card.js";

function Cards({ cards, hoverQuiz, dispatch }) {
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card
          card={card}
          key={card.id}
          dispatch={dispatch}
          hoverQuiz={hoverQuiz}
        />
      ))}
    </div>
  );
}

export default Cards;
