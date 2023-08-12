const Button = (props) => {
  const mode = "btn btn-" + props.color + " btn-" + props.size + " w-" + props.width + " " + props.class;
  return (
    <>
      <button onClick={props.onClick} className={mode}>{props.children}</button>
    </>
  );
};

export default Button;
