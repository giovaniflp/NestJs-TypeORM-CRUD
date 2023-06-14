import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Listener } from './listener.entity';
import { ListenerService } from './listener.service';
import { ListenerController } from './listener.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Listener])],
  providers: [ListenerService],
  controllers: [ListenerController],
})
export class ListenerModule {}
