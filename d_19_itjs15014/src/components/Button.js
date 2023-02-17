const Button = ({
  writting,
  id,
  color,
  pColor,
  pText,
  onChangeTextAndColor,
}) => {
  return (
    <div>
      <button
        className="btn-red"
        style={{ color: color[0] }}
        onClick={() => {
          onChangeTextAndColor(id[0]);
        }}
      >
        {writting[0]}
      </button>
      <button
        className="btn-blue"
        style={{ color: color[1] }}
        onClick={() => {
          onChangeTextAndColor(id[1]);
        }}
      >
        {writting[1]}
      </button>
      <button
        className="btn-green"
        style={{ color: color[2] }}
        onClick={() => {
          onChangeTextAndColor(id[2]);
        }}
      >
        {writting[2]}
      </button>
      <h1 className="printing" style={{ color: pColor }}>
        {pText}
      </h1>
    </div>
  );
};

export default Button;
