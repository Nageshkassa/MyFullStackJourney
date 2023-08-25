import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";



function createEntry(card) {
  return (
    <Entry
      key={card.id}
      imgsrc={card.img}
      skills={card.skills}
      city={card.city}
      name={card.name}
      lastseen={card.status}
    />
  );
}

function App() {
  return (
    <div>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
