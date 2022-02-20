import React from "react";

export const PokemonContext = React.createContext();

export const PokemonProvider = ({ children }) => {
  const globalContextValues = {};

  return (
    <PokemonContext.PokemonProvider values={globalContextValues}>
      {children}
    </PokemonContext.PokemonProvider>
  );
};
