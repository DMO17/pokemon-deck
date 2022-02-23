import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#5b6467",
        backgroundImage: "linear-gradient(315deg, #5b6467 0%, #8b939a 74%)",
      }}
    >
      <Typography variant="h2">POKE-DECKZ</Typography>
    </Box>
  );
};
