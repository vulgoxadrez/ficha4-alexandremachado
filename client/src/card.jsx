function Card({ name, type, attack, defense }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Tipo: {type}</p>
      <p>Ataque: {attack}</p>
      <p>Defense: {defense}</p>
      {attack >= 14 && <span className="forte">forte</span>}
    </div>
  );
}


export default Card;