import { useState } from "react";
import Card from "./Card.jsx";

const cards = [
  { name: "Minos Prime", type: "Prime Soul", attack: 18, defense: 18 },
  { name: "Sisyphus Prime", type: "Prime Soul", attack: 19, defense: 20 },
  { name: "Gabriel, Judge of Hell", type: "Archangel", attack: 20, defense: 20 },
  { name: "V2", type: "Machine", attack: 13, defense: 8 },
  { name: "1000-THR Earthmover", type: "Machine", attack: 17, defense: 16 },
];

function App() {
  const [filter, setFilter] = useState("Todas");

  const visibleCards =
    filter === "Todas"
      ? cards
      : cards.filter((card) => card.type === filter);
  return (
   <main>
  <h1>A minha coleção</h1>

  <p>
    Tenho {cards.length} cartas ({visibleCards.length} à vista)
  </p>

  <div className="filtros">
    <button onClick={() => setFilter("Todas")}>Todas</button>
    <button onClick={() => setFilter("Prime Soul")}>Prime Souls</button>
    <button onClick={() => setFilter("Archangel")}>Archangels</button>
    <button onClick={() => setFilter("Machine")}>Machines</button>
  </div>

  <div className="lista">
    {visibleCards.map((card) => (
      <Card
        key={card.name}
        name={card.name}
        type={card.type}
        attack={card.attack}
        defense={card.defense}
      />
    ))}
  </div>
</main>
  );
}

export default App;


