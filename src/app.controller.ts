import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('pokemon/:id')
  getPokemon(@Param('id') id: string): string {
    if (id === '3391') {
      return 'Pikachu';
    } else {
      return 'Musasi';
    }
  }
}
