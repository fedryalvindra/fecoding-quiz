import "./style/Back.css";
import BackPhoto from "./back.png";
import { useQuiz } from "../../context/QuizContext";

function Back({ page }) {
  const { dispatch } = useQuiz();
  return (
    <img
      className="back"
      src={BackPhoto}
      alt="back"
      onClick={() => dispatch({ type: page })}
    />
  );
}

export default Back;
