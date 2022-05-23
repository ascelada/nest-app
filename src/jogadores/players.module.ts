import { Module } from '@nestjs/common';
import { JogadoresController } from './player.controller';
import { JogadoresService } from './jogadores.service';

@Module({
  controllers: [JogadoresController],
  providers: [JogadoresService],
})
export class PlayersModule {}
