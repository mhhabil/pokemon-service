interface IGetPokemonDto {
  name: string;
  typeFilter: Array<string>;
  sort: 'asc' | 'desc';
}

export class GetPokemonDto {
  name: string;
  typeFilter: Array<string>;
  sort: 'asc' | 'desc';

  constructor(req: IGetPokemonDto) {
    this.name = req.name;
    this.typeFilter =
      req.typeFilter && Array.isArray(req.typeFilter) ? req.typeFilter : [];
    this.sort = req.sort;
  }
}
