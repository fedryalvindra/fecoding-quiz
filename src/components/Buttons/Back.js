import "./style/Back.css";
import BackPhoto from "./back.png";

function Back({ dispatch, page }) {
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
