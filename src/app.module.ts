import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mhhabil:habil123@cluster0.6lqkbzi.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
    AuthModule,
    PokemonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
