import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

export const Training = () => {
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
              <ListItemText>BaseExp: weurbg</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>BaseHappiness :weurbg</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Capture Rate: weurbg</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Growth Rate: weurbg</ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
