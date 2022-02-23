import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { usePokemonContextValues } from "../../hooks";

export const Physical = () => {
  const {
    state: { pokemonData },
  } = usePokemonContextValues();
  return (
    <Box sx={{ m: "35px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Physical Attributes
          </Typography>
          <Divider />
          <List>
            <ListItem>
              <ListItemText>Genus: {pokemonData.genus}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Height :{pokemonData.height}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Weight: {pokemonData.weight}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Abilities: {pokemonData.abilities}</ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
