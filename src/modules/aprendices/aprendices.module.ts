import { Module } from '@nestjs/common';
import { AprendicesController } from './aprendices.controller';
import { AprendicesService } from './aprendices.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AprendicesEntity } from 'src/db/entities';
import { TipoDocumentoModule } from '../tipo-documento/tipo-documento.module';
import { RolesModule } from '../roles/roles.module';
import { FichasModule } from '../fichas/fichas.module';
import { AccesoModule } from '../acceso/acceso.module';

@Module({
  imports: [TypeOrmModule.forFeature([AprendicesEntity]), TipoDocumentoModule, RolesModule, FichasModule, AccesoModule],
  controllers: [AprendicesController],
  providers: [AprendicesService],
  exports:[AprendicesService]
})
export class AprendicesModule {}
