import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export const Physical = () => {
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
              <ListItemText>Genus: weurbg</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Height :weurbg</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Weight: weurbg</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Abilities: weurbg</ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
