interface IGetPokemonDto {
  sortBy: 'id' | 'name';
  name: string;
  typeFilter: Array<string>;
  sort: 'asc' | 'desc';
}

export class GetPokemonDto {
  sortBy: 'id' | 'name';
  name: string;
  typeFilter: Array<string>;
  sort: 'asc' | 'desc';

  constructor(req: IGetPokemonDto) {
    this.sortBy = req.sortBy;
    this.name = req.name;
    this.typeFilter =
      req.typeFilter && Array.isArray(req.typeFilter) ? req.typeFilter : [];
    this.sort = req.sort;
  }
}
