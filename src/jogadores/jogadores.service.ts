import { Injectable, Logger } from '@nestjs/common';
import { criarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/playerinterface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class JogadoresService {
  private jogador: Jogador[] = [];
  private readonly logger = new Logger(JogadoresService.name);

  async criarAtualizarJogador(criaJogadorDto: criarJogadorDto): Promise<void> {
    await this.criar(criaJogadorDto);
  }

  private criar(criaJogadorDto: criarJogadorDto): void {
    const { name, phoneNumber, email } = criaJogadorDto;
    const jogador: Jogador = {
      _id: uuidv4(),
      name,
      phoneNumber,
      email,
      ranking: 'A',
      rankingPosition: 1,
      urlFotoJogador: 'www.google.com.br/foto123.jpg',
    };
    this.logger.log(`criaJogadorDto: ${JSON.stringify(jogador)}`);
    this.jogador.push(jogador);
  }
}
