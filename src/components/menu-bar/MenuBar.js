import { useQuiz } from "../../context/QuizContext";
import "./MenuBar.css";

function MenuBar() {
  const { dispatch } = useQuiz();
  return (
    <nav>
      <ul>
        <li onClick={() => dispatch({ type: "backToLandingPage" })}>Quiz</li>
        <li onClick={() => dispatch({ type: "aboutPage" })}>About</li>
      </ul>
    </nav>
  );
}

export default MenuBar;
