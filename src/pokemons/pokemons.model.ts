import * as mongoose from 'mongoose';
export const PokemonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    alias: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
      required: true,
    },
    catched: {
      type: Boolean,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    detail: {
      type: {
        description: String,
        weight: String,
        height: String,
      },
    },
    stats: {
      type: {
        hp: Number,
        attack: Number,
        defense: Number,
        speed: Number,
      },
      required: true,
    },
  },
  { timestamps: true },
);

interface IDetail {
  description: string;
  weight: string;
  height: string;
}

interface IStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}

export interface IPokemon extends mongoose.Document {
  _id: string;
  name: string;
  alias: string;
  category: Array<string>;
  catched: boolean;
  image: string;
  detail: IDetail;
  stats: IStats;
}
