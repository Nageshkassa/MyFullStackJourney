import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import img1 from "./images/img1.jpg";
// import img2 from './images/noimg.jpg';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App
      img={img1}
      bio={"Film Director,Producer"}
      rop={"€14/hour"}
      i={
        <i
          className="star fa-solid fa-star fa-sm circle-icon"
          style={{ color: "#bfc1c5" }}
        />
      }
      name={"Jeffrey Abrams, 51"}
      add={"New York, United States"}
      info={"Abrams was born in New York City and raised in Los Angeles"}

      status={
     <>
        <i
        className="fa-solid fa-circle fa-2xs"
        style={{ color: "#19a30f" }}
      />
      {"\t"} online</>
       


      }
    />

<App
      
      bio={"Actor, Film Director"}
      rop={"€9/hour"}
      i={
        <i
          className="star fa-solid fa-star fa-sm circle-icon"
          style={{  color: "#EBB02D"}}
        />
      }
      name={"Baltasar, 52"}
      add={"Reykjavik,Iceland"}
      info={"Icelandic actor, theater and film director,and film producer"}

      status={
        
       "Last seen:17 minutes ago"
      
 }
    />



  </StrictMode>
);
