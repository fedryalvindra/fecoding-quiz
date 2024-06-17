import Back from "../Buttons/Back.js";
import InputNameForm from "./InputNameForm.js";
import "./style/FillNamePage.css";

function InputName({ name, dispatch }) {
  return (
    <div className="fill-name-container">
      <Back dispatch={dispatch} page={"backToLandingPage"} />
      <div className="fill-name-content">
        <InputNameForm name={name} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default InputName;
