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

export interface ICreatePokemonDto {
  name: string;
  alias: string;
  category: Array<string>;
  catched: boolean;
  image: string;
  detail: IDetail;
  stats: IStats;
}

export class CreatePokemonDto {
  name: string;
  alias: string;
  category: Array<string>;
  catched: boolean;
  image: string;
  detail: IDetail;
  stats: IStats;

  constructor(req: ICreatePokemonDto) {
    this.name = req.name;
    this.alias = req.alias;
    this.category = req.category;
    this.catched = req.catched;
    this.image = req.image;
    this.detail = req.detail;
    this.stats = req.stats;
  }
}
