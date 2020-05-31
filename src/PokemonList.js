import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PokemonList({ pokemon }) {
  return (
    <div className="container">
      {pokemon.map((p) => (
        <div key={p}>{p} </div>
      ))}
    </div>
  );
}
