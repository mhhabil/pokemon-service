import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { GetPokemonDto } from './dto/get-pokemon.dto';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @UseGuards(AuthenticatedGuard)
  @Post()
  create(@Body() params: CreatePokemonDto) {
    return this.pokemonsService.create(params);
  }

  @UseGuards(AuthenticatedGuard)
  @Post('get-pokemons')
  findAll(@Body() params: GetPokemonDto) {
    return this.pokemonsService.findAll(params);
  }

  @UseGuards(AuthenticatedGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonsService.findOne(id);
  }

  @UseGuards(AuthenticatedGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() params: UpdatePokemonDto) {
    return this.pokemonsService.update(id, params);
  }

  @UseGuards(AuthenticatedGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonsService.remove(id);
  }

  @UseGuards(AuthenticatedGuard)
  @Post('set-captured/:id')
  setCatched(@Param('id') id: string, @Body('isCaptured') isCaptured: boolean) {
    return this.pokemonsService.setCatched(id, isCaptured);
  }
}
