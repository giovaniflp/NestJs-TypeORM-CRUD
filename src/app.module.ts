import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListenerModule } from './listener/listener.module';
import { Listener } from './listener/listener.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'crud',
      entities: [Listener],
      synchronize: true,
    }),
    ListenerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
