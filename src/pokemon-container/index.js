import { useState, useEffect } from "react";
import { Grid, TablePagination as Pagination } from "@mui/material";
import { StyledLeftPanel, StyledRightPanel } from "./pokemonStyle";
import { Card } from "./components/card";

function PokeMon(props) {
  const [pokemonResponse, setPokemonResponse] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const { results: pokemonList, count: pokemonCount } = pokemonResponse || {};

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${rowsPerPage}
                      &offset=${rowsPerPage * page}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setPokemonResponse(response);
      });
  }, [rowsPerPage, page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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
          <Pagination
            rowsPerPageOptions={[10, 20, 50]}
            component="div"
            count={pokemonCount}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={(event) => setRowsPerPage(event.target.value)}
          />
          <Grid container spacing={2}>
            {pokemonList &&
              pokemonList.map((pokemon) => {
                return (
                  <Grid key={pokemon.name} item lg={3} md={4} xs={12}>
                    <Card key={pokemon.name} pokemon={pokemon} />
                  </Grid>
                );
              })}
          </Grid>
          <Pagination
            rowsPerPageOptions={[10, 20, 50]}
            component="div"
            count={pokemonCount}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={(event) => setRowsPerPage(event.target.value)}
          />
        </StyledRightPanel>
      </Grid>
    </Grid>
  );
}

export default PokeMon;
