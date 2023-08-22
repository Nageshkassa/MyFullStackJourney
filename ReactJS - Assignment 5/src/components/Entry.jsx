import React from "react";

function formatLastSeen(lastseen) {
  const currentDate = new Date();

  const diff = currentDate - lastseen;

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
  console.log("lastseen now  ", props.imgsrc);
  return (
    <div className="card">
      <div className="top">
        <img className="circle-img" src={props.imgsrc} alt="" />
        <p className="skills">
          {props.skills[0]}, {props.skills[1]},{props.skills[2]} ,{" "}
          {props.skills[3]}
        </p>
      </div>

      <div className="bottom">
        <div className="bottomdata">
          <h3>{props.name}</h3>
          <p>
            <i className="location fa-solid fa-location-dot" />
            {"\t"}
            <span> {props.city}</span>
          </p>
          <div>
            <button id="cvbtn">View CV</button>
            <button id="offerbtn">Make Offer</button>

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
