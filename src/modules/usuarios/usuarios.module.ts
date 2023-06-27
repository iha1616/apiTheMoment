import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuariosEntity } from 'src/db/entities/usuarios/usuarios.entity';
import { TipoDocumentoModule } from '../tipo-documento/tipo-documento.module';
import { RolesModule } from '../roles/roles.module';
import { AccesoModule } from '../acceso/acceso.module';

@Module({
  imports:[TypeOrmModule.forFeature([UsuariosEntity]), TipoDocumentoModule, RolesModule, AccesoModule],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports:[UsuariosService]
})
export class UsuariosModule {}
