import { ReactNode } from "react";

type PokemonListProps = {
  children: ReactNode;
};
const PokemonList = ({ children }: PokemonListProps) => {
  return <div className="pokemon-list">{children}</div>;
};
export default PokemonList;
