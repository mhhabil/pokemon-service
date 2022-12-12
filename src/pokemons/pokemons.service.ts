import { IPokemon } from './pokemons.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { Model } from 'mongoose';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { GetPokemonDto } from './dto/get-pokemon.dto';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectModel('pokemon') private readonly pokemonModel: Model<IPokemon>,
  ) {}
  async create(params: CreatePokemonDto) {
    const newPokemon = new this.pokemonModel(params);
    await newPokemon.save();
    return newPokemon;
  }

  async findAll(params: GetPokemonDto) {
    const nameQuery: string = params.name;
    const categories: Array<string> = params.typeFilter;
    const sortQuery: 'asc' | 'desc' = params.sort ?? 'asc';
    console.log('sort', sortQuery);
    const searchQuery: any = {};
    if (categories && categories.length > 0) {
      searchQuery.category = { $in: categories };
    }
    if (nameQuery && nameQuery !== '') {
      searchQuery.name = { $regex: `.*${nameQuery}.*`, $options: 'i' };
    }
    const pokemons = await this.pokemonModel
      .find(searchQuery)
      .sort({ name: sortQuery });
    if (!pokemons || (pokemons && pokemons.length === 0)) {
      throw new NotFoundException('Pokemon data not found!');
    }
    return pokemons;
  }

  async findOne(id: string) {
    const pokemon = await this.pokemonModel.findById(id).exec();
    if (!pokemon) {
      throw new NotFoundException(`Pokemon #${id} not found`);
    }
    return pokemon;
  }

  async update(id: string, params: UpdatePokemonDto) {
    const existingPokemon = await this.pokemonModel.findByIdAndUpdate(
      id,
      params,
      { new: true },
    );
    if (!existingPokemon) {
      throw new NotFoundException(`Pokemon #${id} not found`);
    }
    return existingPokemon;
  }

  async remove(id: string) {
    const deletedPokemon = await this.pokemonModel.findByIdAndDelete(id);
    if (!deletedPokemon) {
      throw new NotFoundException(`Pokemon #${id} not found`);
    }
    return deletedPokemon;
  }

  async setCatched(id: string, isCatched: boolean) {
    const existingPokemon = this.pokemonModel.updateOne(
      { _id: id },
      { $set: { catched: isCatched } },
    );
    if (!existingPokemon) {
      throw new NotFoundException(`Pokemon #${id} not found`);
    }
    return existingPokemon;
  }
}
