import React from "react";
import {
  StyledCard,
  StyledCardContent,
  StyledCardName,
  StyledImage,
} from "../pokemonStyle";

export const Card = (props) => {
  const { pokemon } = props;

  return (
    <StyledCard id="card">
      <StyledCardContent>
        <a
          href={`https://www.pokemon.com/us/pokedex/${pokemon.name}`}
          target="_blank"
          rel="noreferrer"
        >
          <StyledImage
            alt="pokemon"
            src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          />
          <StyledCardName>{pokemon.name}</StyledCardName>
        </a>
      </StyledCardContent>
    </StyledCard>
  );
};
