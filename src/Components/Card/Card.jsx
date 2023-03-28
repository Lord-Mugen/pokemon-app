import "./card.css";

const Card = ({ pokemon, loading, infoPokemon }) => {
  // console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <figcaption
                className="c-card"
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <div className="c-card__data">
                  <h2>{item.id}</h2>
                  <img src={item.sprites.front_default} alt="pokemon image" />
                  <h2 className="c-card__name">{item.name}</h2>
                </div>
              </figcaption>
            </>
          );
        })
      )}
    </>
  );
};
export default Card;
