import { useState, useEffect } from "react";
import { Grid, TablePagination as Pagination } from "@mui/material";
import { Card } from "./card";

function PokemonContent(props) {
    const {filterBy = null, filterByValue = null, sortBy = null} = props;

  const [pokemonResponse, setPokemonResponse] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [listOfPokemonDetails, setListOfPokemonDetails] = useState([]);

  const { count: pokemonCount } = pokemonResponse || {};

  let fetchCount = 0;
  let maxCount = 0;
  let tmpList = [];

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${rowsPerPage}
                      &offset=${rowsPerPage * page}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setPokemonResponse(response);
        fetchPokemonDetails(response.results);
      });
  }, [rowsPerPage, page]);

  const fetchPokemonDetails = (results) => {
    fetchCount = 0;
    maxCount = results.length;
    tmpList = [];
    results.map((res) => {
      return fetch(res.url)
        .then((response) => response.json())
        .then((response) => {
          tmpList.push(response);
          if (fetchCount === maxCount - 1) {
            setListOfPokemonDetails(tmpList);
          }
          fetchCount = fetchCount + 1;
        });
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const getSorted = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => (a[orderBy] > b[orderBy] ? -1 : 1)
      : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
  };

  const filterObjectBy = (array) => {
    if (filterBy && filterByValue) {
      if (filterBy === "name") {
        array = array.filter((poker) => poker.name.includes(filterByValue));
      } else {
        array = array.filter((poker) =>
          poker.abilities.some((ability) =>
            ability.ability.name.includes(filterByValue)
          )
        );
      }
    }
    return array;
  };

  return (
    <>
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
        {listOfPokemonDetails &&
          filterObjectBy(listOfPokemonDetails)
            .sort(getSorted("asc", sortBy))
            .map((pokemon) => {
              return (
                <Grid key={pokemon.name} item lg={4} md={4} xs={12}>
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
    </>
  );
}

export default PokemonContent;
