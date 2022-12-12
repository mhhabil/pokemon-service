import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto, ICreatePokemonDto } from './create-pokemon.dto';

interface IUpdatePokemonDto extends ICreatePokemonDto {
  _id: string;
}

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {
  _id: string;

  constructor(req: IUpdatePokemonDto) {
    super(req);
    this._id = req._id;
  }
}
