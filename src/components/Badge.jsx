const Badge = (props) => {
    const badge = "badge round-pill bg-" + props.color + " " + props.class;
    return (
      <>
        <span className={badge}>{props.children}</span>
      </>
    );
}
 
export default Badge;