import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { usePokemonContextValues } from "../../hooks";

export const Stats = () => {
  const {
    state: { pokemonData },
  } = usePokemonContextValues();
  return (
    <Box sx={{ m: "35px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Stats Ability
          </Typography>
          <Divider />

          <Box sx={{ display: "flex" }}>
            <List sx={{ mr: 3 }}>
              <ListItem>
                <ListItemText>HP:{pokemonData.stats[0].strength}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>ATK:{pokemonData.stats[1].strength}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>DEF:{pokemonData.stats[2].strength}</ListItemText>
              </ListItem>
            </List>

            <List>
              <ListItem>
                <ListItemText>
                  SP.ATK:{pokemonData.stats[3].strength}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  SP.DEF:{pokemonData.stats[4].strength}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  SPEED:{pokemonData.stats[5].strength}
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
