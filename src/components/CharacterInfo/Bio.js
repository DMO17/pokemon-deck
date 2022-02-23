import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { usePokemonContextValues } from "../../hooks";

export const Bio = () => {
  const {
    state: { pokemonData },
  } = usePokemonContextValues();

  return (
    <Box sx={{ margin: "5px", maxWidth: "700px" }}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bio
          </Typography>
          <Divider />
          <Typography gutterBottom variant="subtitle" component="div">
            {pokemonData.name} #{pokemonData.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pokemonData.bio}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
