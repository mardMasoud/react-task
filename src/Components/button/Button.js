const Button = (props) => {
  const { title, color, on_click1 } = props;

  return (
    <button
      onClick={on_click1}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {title}
    </button>
  );
};

export default Button;
