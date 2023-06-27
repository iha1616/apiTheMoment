import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { DatabaseModule } from './db/database.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { TipoDocumentoModule } from './modules/tipo-documento/tipo-documento.module';
import { RolesModule } from './modules/roles/roles.module';
import { PermisosModule } from './modules/permisos/permisos.module';
import { RolesPermisoModule } from './modules/roles_permiso/roles_permiso.module';
import { AprendicesModule } from './modules/aprendices/aprendices.module';
import { AccesoModule } from './modules/acceso/acceso.module';
import { FichasModule } from './modules/fichas/fichas.module';
import { ProgramasFormativosModule } from './modules/programas_formativos/programas_formativos.module';
import { CompetenciasModule } from './modules/competencias/competencias.module';
import { ResultadoAprendizajeModule } from './modules/resultado_aprendizaje/resultado_aprendizaje.module';
import { ProgramaCoordinacionModule } from './modules/programa_coordinacion/programa_coordinacion.module';
import { FichaUsuarioModule } from './modules/ficha-usuario/ficha-usuario.module';

@Module({
  imports: [ConfigModule.forRoot({
   isGlobal: true,
   load: [config],
   envFilePath: ".env",
  }), DatabaseModule, UsuariosModule, TipoDocumentoModule, RolesModule, PermisosModule, RolesPermisoModule, AprendicesModule, AccesoModule, FichasModule, ProgramasFormativosModule, CompetenciasModule, ResultadoAprendizajeModule, ProgramaCoordinacionModule, FichaUsuarioModule],
})
export class AppModule {}
