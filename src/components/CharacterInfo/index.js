import React from "react";

import Box from "@mui/material/Box";
import { Profile } from "./Profile";
import { Bio } from "./Bio";
import { Physical } from "./Physical";
import { Training } from "./Training";
import { Stats } from "./Stats";
// import { Evolution } from "./Evolution";

export const CharacterInfo = () => {
  return (
    <Box
      sx={{
        marginTop: "100px",
        border: "5px black solid",
        display: "flex",
        flexDirection: "column",
        flex: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Profile />
        <Bio />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Physical />
        <Stats />
        <Training />
      </Box>
      {/* <Evolution /> */}
    </Box>
  );
};
