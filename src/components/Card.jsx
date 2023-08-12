const Card = (props) => {
  return (
    <div className="row">
      <div className="col-sm-12 col-lg-6 m-auto mt-5">
        <div className="card">
          <div className="card-body">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
