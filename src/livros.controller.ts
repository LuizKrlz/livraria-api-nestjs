import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  async obterTodos(): Promise<Livro[]> {
    return await this.livrosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Promise<Livro> {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  async criar(@Body() produto: Livro) {
    await this.livrosService.criar(produto);
  }

  @Put(':id')
  async alterar(@Param() params, @Body() livro: Livro): Promise<UpdateResult> {
    return this.livrosService.alterar(params.id, livro);
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}
