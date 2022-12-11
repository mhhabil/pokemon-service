import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //Post /register
  @Post('/register')
  async addUser(
    @Body('password') userPassword: string,
    @Body('username') userName: string,
  ) {
    const hashCount = 10;
    const hashedPassword = await bcrypt.hash(userPassword, hashCount);
    const result = await this.usersService.insertUser(userName, hashedPassword);
    return {
      msg: 'User created successfully',
      userId: result.id,
      userName: result.username,
    };
  }

  //Post /login
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req): any {
    return {
      User: req.user,
      message: 'logged in',
    };
  }

  //Get /protected
  @UseGuards(AuthenticatedGuard)
  @Get('/protected')
  getHello(@Request() req): string {
    return req.user;
  }

  @Get('/logout')
  logout(@Request() req): any {
    req.session.destroy();
    return { msg: 'The user session has ended' };
  }
}
