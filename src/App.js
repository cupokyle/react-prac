import React from "react";
import "./App.css";
import bday from "./bday.png";

function Header(props) {
  return (
    <header>
      <h2>Happy Birthday {props.firstName}!</h2>
    </header>
  );
}

function Main(props) {
  return (
    <section className="main">
      <img
        src={bday}
        alt="bubbly letters that say Happy Birthday"
        height={400}
      />
      <p>Here's what we got you buddy:</p>
      <ul id="menu">
        {" "}
        {props.gifts.map((gift) => (
          <li key={gift.id}>{gift.title}</li>
        ))}{" "}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const gifts = [
  "Motorcycle!",
  "Esso Gift Card",
  "Wu Tang T Shirt",
  "Comfy Socks",
];

const giftObjects = gifts.map((gift, i) => ({ id: i, title: gift }));
console.log(giftObjects);

function App() {
  return (
    <div className="App">
      <Header firstName="Chris" lastName="Simpson" age="42" />
      <Main adjective="freaking" gifts={giftObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
