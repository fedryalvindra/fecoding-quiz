import Pagination from "./Pagination";

function PaginationList({
  quiz,
  totalQuiz,
  dispatch,
  noQuestion,
  curAnswer,
  checkAnswered,
  question,
}) {
  return (
    <ul className="pagination">
      {Array.from({ length: totalQuiz }, (_, i) => i + 1).map((num) => (
        <Pagination
          key={num}
          quiz={quiz}
          dispatch={dispatch}
          noQuestion={noQuestion}
          curAnswer={curAnswer}
          num={num}
          checkAnswered={checkAnswered}
          question={question}
        />
      ))}
    </ul>
  );
}

export default PaginationList;
