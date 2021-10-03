import { Grid } from "@mui/material";
import { StyledLeftPanel, StyledRightPanel } from "./pokemonStyle";

function PokeMon(props) {
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
          <h2>Right Panel</h2>
        </StyledRightPanel>
      </Grid>
    </Grid>
  );
}

export default PokeMon;
