import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";

export const Stats = () => {
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
                <ListItemText>HP:345</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>ATK:345</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>DEF:345</ListItemText>
              </ListItem>
            </List>

            <List>
              <ListItem>
                <ListItemText>SP.ATK:345</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>SP.DEF:345</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>SPEED:345</ListItemText>
              </ListItem>
            </List>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
