import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

export const Stats = () => {
  return (
    <Box sx={{ m: "35px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Stats Ability
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.secondary">
            <Box sx={{ display: "flex" }}>
              <List sx={{ mr: 3 }}>
                <ListItemText>HP:345</ListItemText>
                <ListItemText>ATK:345</ListItemText>
                <ListItemText>DEF:345</ListItemText>
              </List>

              <List>
                <ListItemText>SP.ATK:345</ListItemText>
                <ListItemText>SP.DEF:345</ListItemText>
                <ListItemText>SPEED:345</ListItemText>
              </List>
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
