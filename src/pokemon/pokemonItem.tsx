interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonSprites {
  other: {
    dream_world: {
      front_default: string;
    };
  };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  types: PokemonType[];
}
interface PokemonItemProps {
  value: Pokemon;
}

export default function PokemonItem({ value }: PokemonItemProps) {
  return (
    <div className="pokemon-item">
      <div className="poke-title">
        {value.name[0].toUpperCase() + value.name.slice(1)}
      </div>
      <img src={value.sprites.other.dream_world.front_default} alt="" />
      <div className="poke-content">
        <div className="poke-type">Type: {value.types[0].type.name}</div>
        <div className="poke-height-weight">
          <div className="poke-number">Pokemon Number:{value.id}</div>
          <div className="poke-height">Height: {value.height} ft</div>
          <div className="poke-height">Weight: {value.weight} ft</div>
        </div>
      </div>
    </div>
  );
}
