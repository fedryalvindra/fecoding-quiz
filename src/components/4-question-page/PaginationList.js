import { useQuiz } from "../../context/QuizContext";
import Pagination from "./Pagination";

function PaginationList({ quiz }) {
  const { totalQuiz } = useQuiz();
  return (
    <ul className="pagination">
      {Array.from({ length: totalQuiz }, (_, i) => i + 1).map((num) => (
        <Pagination key={num} quiz={quiz} num={num} />
      ))}
    </ul>
  );
}

export default PaginationList;
