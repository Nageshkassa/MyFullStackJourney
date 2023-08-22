import React from "react";
import Entry from "./Entry";
// import emojipedia from "../emojipedia";
import profile from "../profile.json";

//1. Extract the repeated parts of the App into a Entry component.
//2. Use props to make the Entry component render different data.
//3a. Import the emojipedia constant.
//3b. Map through the emojipedia array and render Entry components.

//Emojipedia has 3 entries, so createEntry gets called 3 times.
//Each time, it passes 1 item from the emojipedia array as a var called emojiTerm.

//var emojiTerm = {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// }

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
  return <div className="dictionary">{profile.map(createEntry)}</div>;
}

export default App;
