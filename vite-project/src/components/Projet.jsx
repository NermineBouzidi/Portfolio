function Projet(props) {
  return (
    <>
      <div
        className="card mb-3"
        style={{
          maxwidth: "300px",
          marginRight: "150px",
          marginLeft: "150px",
          marginTop: "90px",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.src}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.desc}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
              <button type="button" class="btn btn-outline-dark">
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projet;
