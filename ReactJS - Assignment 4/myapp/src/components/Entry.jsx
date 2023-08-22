import React from "react";
import MyImage from "./images/img1.jpg";

// const formatLastSeen = (lastSeen) => {
//   const currentTime = new Date();

// };
function formatLastSeen(lastseen) {
  // const currentDate = new Date();
  // const dateDif=currentDate.getDate()- lastseen.getDate();
  // if(dateDif>7){
  //   return ""

  // }
  // console.log("lastseen now  ", lastseen.getDate());
  // console.log("current date ");

  const currentDate = new Date();

  const diff = currentDate - lastseen;
  if (diff.toString() === "NaN") {
  }
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (minutes < 1) {
    return (
      <>
        <i className="fa-solid fa-circle fa-2xs" style={{ color: "#19a30f" }} />{" "}
        {"\t"} Online
      </>
    );
  } else if (hours < 1) {
    return `Last seen ${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (days < 1) {
    return `Last seen ${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (days < 7) {
    return `Last seen ${days} ${days === 1 ? "day" : "days"} ago`;
  } else {
    return `Last seen several days ago`;
  }
}

function Entry(props) {
  // const abc = new Date(props.lastseen);
  // console.log("lastseen now  ", props.lastseen);
  return (
    <div className="card">
      <div className="top">
        <img className="circle-img" src={props.imgsrc} alt="" />
        <p className="skills">
          {props.skills[0]}, {props.skills[1]},{props.skills[2]} ,{" "}
          {props.skills[3]}
        </p>

        <div className="name">
          {/* <label>{props.name}</label> */}
          <br />
          <strong>{props.rop}</strong>
        </div>
      </div>

      <div className="bottom">
        <div className="bottomdata">
          <h3>{props.name}</h3>
          <p>
            <strong>
              <i className="location fa-solid fa-location-dot" />
              {"\t"}
              <span> {props.city}</span>
            </strong>
          </p>
          <div className="buttons d-grid gap-2 col-6 mx-auto">
            <button type="button" className="btn btn-outline-primary ">
              VIEW CV
            </button>
            <br />
            <button className="btn btn-primary" type="button">
              MAKE OFFER
            </button>

            <div>
              <p className="status">
                <span>{formatLastSeen(new Date(props.lastseen))}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entry;
