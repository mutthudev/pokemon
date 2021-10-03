import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TextField } from "@mui/material";
import { StyledLeftPanelWrapper, StyledLabel } from "../pokemonStyle";

function PokemonOptions(props) {
  const {
    searchByFilterOnChange,
    handleFilterByChange,
    handleSortOptionChange,
  } = props;

  return (
    <StyledLeftPanelWrapper>
      <FormControl component="fieldset" style={{ marginTop: 50 }}>
        <FormLabel component="legend">        
          <StyledLabel id='sort'> Sort By: </StyledLabel>
        </FormLabel>
        <RadioGroup
          aria-label="sort"
          defaultValue=""
          name="sort"
          onChange={handleSortOptionChange}
        >
          <FormControlLabel value="name" control={<Radio />} label="Name" />
          <FormControlLabel value="height" control={<Radio />} label="Height" />
          <FormControlLabel value="weight" control={<Radio />} label="Weight" />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset" style={{ marginTop: 20 }}>
        <FormLabel component="legend">
          <StyledLabel id='filter'> Filter By: </StyledLabel>
        </FormLabel>
        <RadioGroup
          aria-label="filter"
          defaultValue=""
          name="filter"
          onChange={handleFilterByChange}
        >
          <FormControlLabel value="name" control={<Radio />} label="Name" />
          <FormControlLabel
            value="ability"
            control={<Radio />}
            label="Ability"
          />
        </RadioGroup>
        <TextField
          name={"filterValue"}
          label="Filter"
          onChange={searchByFilterOnChange}
        />
      </FormControl>
    </StyledLeftPanelWrapper>
  );
}

export default PokemonOptions;
