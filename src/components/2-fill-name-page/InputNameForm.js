import { useQuiz } from "../../context/QuizContext";
import Button from "../Buttons/Button";

function InputNameForm() {
  const { name, dispatch } = useQuiz();
  
  return (
    <div className="input-name">
      <h1 style={{ color: "#FF76CE" }}>
        Fill your name to get the{" "}
        <span style={{ color: "#94ffd8" }}>certificate</span>
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="text-field">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              dispatch({ type: "addName", payload: e.target.value })
            }
          />
          <br />
          <p>*Name must more than 2 letter and less than 20 letter</p>
        </div>
        <Button
          onClick={() =>
            name.length >= 3 &&
            name.length <= 20 &&
            dispatch({ type: "quizDetailPage" })
          }
        >
          Next
        </Button>
      </form>
    </div>
  );
}

export default InputNameForm;
