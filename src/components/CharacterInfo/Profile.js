import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import { usePokemonContextValues } from "../../hooks";

export const Profile = () => {
  const {
    state: { pokemonData },
  } = usePokemonContextValues();
  return (
    <Box sx={{ margin: "5px" }}>
      <Paper
        sx={{
          height: 250,
          width: 250,
          borderRadius: 2,
        }}
      >
        <Card className="pokemonCard">
          <div className="cardSpacing">
            <img
              src={pokemonData.img}
              alt="pokemon img"
              className="pokemonIg"
            />
          </div>
        </Card>
      </Paper>
    </Box>
  );
};
