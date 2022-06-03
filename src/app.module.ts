import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';
import { Livro } from './livro.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USER_BD,
      password: process.env.USER_PASSWORD,
      database: 'livraria',
      entities: [],
      autoLoadEntities: true, //autocarrega os modules
      synchronize: true, // syncroniza com o banco de dados
    }),
    TypeOrmModule.forFeature([Livro]),
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
