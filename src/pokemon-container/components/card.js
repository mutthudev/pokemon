import React, { useState, useEffect } from "react";
import {
  StyledCard,
  StyledCardContent,
  StyledCardName,
  StyledImage,
  StyledWrapper,
  StyledLabel,
  StyledValue,
  StyledTextCapitalize,
} from "../pokemonStyle";

export const Card = (props) => {
  const { pokemon } = props;
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const { weight, height, abilities } = pokemonDetails || {};
  
  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
        setPokemonDetails(response);
      });
  }, [pokemon.url]);

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
      <StyledCardContent>
        <StyledWrapper>
          <StyledLabel id="weight">Weight:</StyledLabel>
          <StyledValue>{weight}</StyledValue>
        </StyledWrapper>
        <StyledWrapper>
          <StyledLabel id="height">Height:</StyledLabel>
          <StyledValue>{height}</StyledValue>
        </StyledWrapper>
        <StyledLabel id="abilities">Abilities:</StyledLabel>
        <ul style={{ marginTop: -20 }}>
          {abilities &&
            abilities.length > 0 &&
            abilities.map((ability) => {
              return (
                <li key={ability.ability.name}>
                  <StyledTextCapitalize>
                    {ability.ability.name}
                  </StyledTextCapitalize>
                </li>
              );
            })}
        </ul>
      </StyledCardContent>
    </StyledCard>
  );
};
