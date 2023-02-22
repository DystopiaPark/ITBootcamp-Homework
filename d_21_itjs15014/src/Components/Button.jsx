const Button = ({ title, color, setText }) => {
  return (
    <button
      style={{ color: color }}
      onClick={() => {
        setText(title);
      }}
    >
      {title}
    </button>
  );
};

export default Button;
