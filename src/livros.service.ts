import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  constructor(
    @InjectRepository(Livro) private livroRepository: Repository<Livro>,
  ) {}

  async obterTodos(): Promise<Livro[]> {
    return await this.livroRepository.find();
  }

  async obterUm(id: string): Promise<Livro> {
    return this.livroRepository.findOneBy({ id });
  }

  async criar(livro: Livro) {
    try {
      await this.livroRepository.save(livro);
    } catch (error) {
      console.log(error);
    }
  }

  async alterar(id: string, livro: Livro): Promise<UpdateResult> {
    return await this.livroRepository.update({ id }, livro);
  }

  async apagar(id: string) {
    const livro: Livro = await this.obterUm(id);

    await this.livroRepository.delete(livro);
  }
}
