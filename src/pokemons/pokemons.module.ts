import { Module } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { PokemonsController } from './pokemons.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonSchema } from './pokemons.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'pokemon',
        schema: PokemonSchema,
      },
    ]),
  ],
  controllers: [PokemonsController],
  providers: [PokemonsService],
  exports: [PokemonsService],
})
export class PokemonsModule {}
