import { useState } from "react";
import { Grid} from "@mui/material";
import { StyledLeftPanel, StyledRightPanel } from "./pokemonStyle";

import PokemonOptions from "./components/pokemonOptions";
import PokemonContent from "./components/pokemonContent";

function PokeMon() {
  const [sortBy, setSortBy] = useState(null);
  const [filterBy, setFilterBy] = useState(null);
  const [filterByValue, setFilterByValue] = useState(null); 

  const handleSortOptionChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleFilterByChange = (event) => {
    setFilterBy(event.target.value);
  };

  const searchByFilterOnChange = (event) => {
    setFilterByValue(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2 id="welcome"> Welcome to Pokemon List</h2>
      </Grid>
      <Grid item md={2} xs={12}>
        <StyledLeftPanel id="leftPanel">
          <PokemonOptions
            handleSortOptionChange={handleSortOptionChange}
            searchByFilterOnChange={searchByFilterOnChange}
            handleFilterByChange={handleFilterByChange}
          />
        </StyledLeftPanel>
      </Grid>
      <Grid item md={10} xs={12}>
        <StyledRightPanel id="rightPanel">
          <PokemonContent 
          sortBy={sortBy}
          filterBy={filterBy}
          filterByValue={filterByValue}
          />
        </StyledRightPanel>
      </Grid>
    </Grid>
  );
}

export default PokeMon;
