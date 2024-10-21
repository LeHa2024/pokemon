import "./App.css";
import PokemonList from "./pokemon/pokemonList";
import PokemonItem from "./pokemon/pokemonItem";
import "./pokemon/pokeItem.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pokemon } from "./pokemon/pokemonItem";

function App() {
  const [data, setData] = useState<Pokemon[]>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
      .then(async (response) => {
        const results = response.data.results;

        const pokemonDetailsPromises: Promise<Pokemon>[] = results.map(
          (pokemon: { url: string }) =>
            axios.get(pokemon.url).then((res) => res.data) // Lấy dữ liệu chi tiết từ từng URL
        );
        // console.log(pokemonDetailsPromises);

        const detailedPokemonData: Pokemon[] = await Promise.all(
          pokemonDetailsPromises
        );

        setData(detailedPokemonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="pokemon">
      <div className="container">
        <div className="pokemon-title">
          <img
            src="https://raw.githubusercontent.com/calvarezberrios/Sprint-Challenge-React-Wars/4e8055522f235cc85c18cb5e8812f33ffb8044c5/starwars/src/images/pokemon_logo.png"
            alt=""
          />
        </div>
        <PokemonList>
          {data.map((pokemon, id) => (
            <PokemonItem key={id} value={pokemon} />
          ))}
        </PokemonList>
      </div>
    </div>
  );
}

export default App;
