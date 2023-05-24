import { Module } from '@nestjs/common';
import { GrupoProyectoController } from './grupo-proyecto.controller';
import { GrupoProyectoService } from './grupo-proyecto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GruposProyectoEntity } from 'src/db/entities';

@Module({
   imports: [TypeOrmModule.forFeature([GruposProyectoEntity])],
  controllers: [GrupoProyectoController],
  providers: [GrupoProyectoService]
})
export class GrupoProyectoModule {}
