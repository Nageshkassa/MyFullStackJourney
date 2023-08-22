import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import noimg from "./images/noimg.jpg";

export default function App(props) {
  document.body.style = "background: #e4e4e6;";
  const img=props.img || noimg;
  return (
    <div className="card">
      <div className="top">
        <img className="circle-img" src={img} alt="" />
        {props.i}

        <div className="name">
          <label>{props.bio}</label>
          <br />
          <strong>{props.rop}</strong>
        </div>
      </div>
      <div className="bottom">
        {/* Content for the bottom box */}

        <label>{props.name}</label>

        <div className="bottomdata">
          <p>
            <strong>
              <i className="location fa-solid fa-location-dot" />
              {"\t"}{props.add}
            </strong>
          </p>
          <p>
            <span>
           {props.info}
            </span>
          </p>
        </div>
        <div className="buttons d-grid gap-2 col-6 mx-auto">
          <button type="button" className="btn btn-outline-primary ">
            VIEW CV
          </button>
          
          <button className="btn btn-primary" type="button">
            MAKE OFFER
          </button>
        </div>
        <div className="status">
    <span >
    {props.status}
    </span>
        </div>
      </div>
    </div>
  );
}
