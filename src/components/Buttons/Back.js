import "./style/Back.css";

function Back({ dispatch, page }) {
  return (
    <img
      className="back"
      src="/back.png"
      alt="back"
      onClick={() => dispatch({ type: page })}
    />
  );
}

export default Back;
