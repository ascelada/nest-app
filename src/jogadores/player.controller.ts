import { Body, Controller, Post } from '@nestjs/common';
import { criarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private readonly jogadoresService: JogadoresService) {}

  @Post()
  async criarAtualizarJogador(@Body() criaJogadorDto: criarJogadorDto) {
    await this.jogadoresService.criarAtualizarJogador(criaJogadorDto);
  }
}
