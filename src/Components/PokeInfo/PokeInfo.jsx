import "./pokeInfo.css";

const Pokeinfo = ({ data }) => {
  return (
    <div className="c-info">
      {!data ? (
        ""
      ) : (
        <>
          <h1>{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <div className="abilities">
            {data.abilities.map((poke) => {
              return (
                <>
                  <div className="group">
                    <h2>{poke.ability.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((poke) => {
              return (
                <>
                  <p className="c-info__stats">
                    {poke.stat.name}:{poke.base_stat}
                  </p>
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
export default Pokeinfo;
