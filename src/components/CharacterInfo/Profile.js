import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";

export const Profile = () => {
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
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/57.svg"
              alt="pokemon img"
              className="pokemonIg"
            />
          </div>
        </Card>
      </Paper>
    </Box>
  );
};
