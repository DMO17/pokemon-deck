import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
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
          <Typography variant="body2" color="text.secondary">
            <List>
              <ListItemText>Genus: weurbg</ListItemText>
              <ListItemText>Height :weurbg</ListItemText>
              <ListItemText>Weight: weurbg</ListItemText>
              <ListItemText>Abilities: weurbg</ListItemText>
            </List>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
