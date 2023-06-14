import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Listener } from './listener.entity';
import { ListenerDto } from './listener.dto';

@Injectable()
export class ListenerService {
  update(id: number, listenerDto: ListenerDto) {
    return this.usersRepository.update(id, listenerDto);
  }
  constructor(
    @InjectRepository(Listener)
    private usersRepository: Repository<Listener>,
  ) {}

  findAll(): Promise<Listener[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Listener | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async create(listenerDto: ListenerDto): Promise<Listener> {
    return await this.usersRepository.save(listenerDto);
  }
}
