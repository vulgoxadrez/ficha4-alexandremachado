import Card from "./card.jsx";


const cards = [
  { name: "Minos Prime", type: "Prime Soul", attack: 18, defense: 18 },
  { name: "Sisyphus Prime", type: "Prime Soul", attack: 19, defense: 20 },
  { name: "Gabriel, Judge of Hell", type: "Archangel", attack: 20, defense: 20 },
  { name: "V2", type: "Machine", attack: 13, defense: 8 },
  { name: "1000-THR Earthmover", type: "Machine", attack: 17, defense: 16 },
];

function App() {
  return (
    <main>
      <h1>A minha coleção</h1>

      <p>Tenho {cards.length} cartas</p>

      <div className="lista">
        {cards.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            type={card.type}
            attack={card.attack}
          />
        ))}
      </div>
    </main>
  );
}

export default App;


