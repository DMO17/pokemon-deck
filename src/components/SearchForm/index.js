import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const SearchForm = () => {
  const [searchedName, setSearchedName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    return setSearchedName(inputValue);
  };

  return (
    <Box sx={{ mb: 5, display: "flex", justifyContent: "center" }}>
      <form onSubmit={onSubmit}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Pokemon Name"
          variant="outlined"
          value={inputValue}
          onChange={(e) => {
            return setInputValue(e.target.value);
          }}
        />

        <Button variant="outlined" type="submit" fullWidth>
          SEARCH
        </Button>
      </form>
    </Box>
  );
};
