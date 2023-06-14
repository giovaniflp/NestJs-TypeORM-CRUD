// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ListenerService } from './listener.service';
import { ListenerDto } from './listener.dto';
import { Listener } from './listener.entity';

@Controller('listener')
export class ListenerController {
  constructor(private listenerService: ListenerService) {}

  @Get()
  async list() {
    return this.listenerService.findAll();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    return this.listenerService.findOne(id);
  }

  @Post()
  async create(@Body() listenerDto: ListenerDto) {
    const user = new Listener();
    user.listener = listenerDto.listener;
    user.password = listenerDto.password;
    user.email = listenerDto.email;

    return await this.listenerService.create(user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.listenerService.remove(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() listenerDto: ListenerDto) {
    return await this.listenerService.update(id, listenerDto);
  }
}
