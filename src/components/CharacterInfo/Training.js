import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { usePokemonContextValues } from "../../hooks";

export const Training = () => {
  const {
    state: { pokemonData },
  } = usePokemonContextValues();
  return (
    <Box sx={{ m: "35px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Training Attributes
          </Typography>
          <Divider />
          <List>
            <ListItem>
              <ListItemText>BaseExp: pokemonData.baseExp</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                BaseHappiness :{pokemonData.baseHappiness}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Capture Rate: {pokemonData.captureRate}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Growth Rate: {pokemonData.growthRate}</ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
