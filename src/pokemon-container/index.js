import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { StyledLeftPanel, StyledRightPanel } from "./pokemonStyle";

function PokeMon(props) {
  const [pokemonResponse, setPokemonResponse] = useState(null);
  const { results } = pokemonResponse || {};

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setPokemonResponse(response);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2 id="welcome"> Welcome to Pokemon List</h2>
      </Grid>
      <Grid item md={2} xs={12}>
        <StyledLeftPanel id="leftPanel">
          <h2>Left Panel</h2>
        </StyledLeftPanel>
      </Grid>
      <Grid item md={10} xs={12}>
        <StyledRightPanel id="rightPanel">
          <Grid container spacing={2}>
            {results &&
              results.map((pokemon) => {
                return (
                  <Grid key={pokemon.name} item lg={3} md={4} xs={12}>
                    {pokemon.name}
                  </Grid>
                );
              })}
          </Grid>
        </StyledRightPanel>
      </Grid>
    </Grid>
  );
}

export default PokeMon;
