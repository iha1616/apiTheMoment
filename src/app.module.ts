import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesEntity } from './db/entitites/roles_permisos/roles.entity';
import { PermisosEntity } from './db/entitites/roles_permisos/permisos.entity';
import { RolesPermisosEntity } from './db/entitites/roles_permisos/roles_permisos.entity';
import { UsuariosEntity } from './db/entitites/usuarios/usuarios.entity';
import { TipoDocumentoEntity } from './db/entitites/usuarios/tipo_documento.entity';
import { AprendicesEntity } from './db/entitites/usuarios/aprendices.entity';
import { ProgramasFormativosEntity } from './db/entitites/area_formativa/programas_formativos.entity';
import { CompetenciaEntity } from './db/entitites/area_formativa/competencias.entity';
import { ResultadoAprendizajeEntity } from './db/entitites/area_formativa/resultado_aprendizaje.entity';
import { FichasEntity } from './db/entitites/area_formativa/ficha.entity';
import { PCAEntity } from './db/entitites/area_formativa/programa_coordinacion_academica.entity';
import { ComiteEntity } from './db/entitites/comite/comite.entity';
import { EntregaFichaEntity } from './db/entitites/entrega_ficha/entrega_ficha.entity';
import { ObservacionesAprendizEntity } from './db/entitites/entrega_ficha/observaciones_aprendiz.entity';
import { PlanMejoramientoEntity } from './db/entitites/plan_mejoramiento/plan_mejoramiento.entity';
import { EstadoQuejasEntity } from './db/entitites/quejas/estados_quejas.entity';
import { QuejasComiteEntity } from './db/entitites/quejas/quejas_comite.entity';
import { ArchivosProyectoEntity } from './db/entitites/spf/spf_archivos_proyecto.entity';
import { GruposProyectoEntity } from './db/entitites/spf/spf_grupos_proyecto.entity';
import { TipoArchivoEntity } from './db/entitites/spf/spf_tipo_archivo.entity';
import { EstadoDecisionEntity } from './db/entitites/utilitis/estado_decision.entity';
import { MotivosComiteEntity } from './db/entitites/utilitis/motivos_comite.entity';
import { ProgramaCompetenciaEntity } from './db/entitites/area_formativa/programa_competencia.entity';

const allEntities = [RolesEntity, PermisosEntity, RolesPermisosEntity, ProgramaCompetenciaEntity, TipoDocumentoEntity, UsuariosEntity, AprendicesEntity, ProgramasFormativosEntity, CompetenciaEntity, ResultadoAprendizajeEntity, FichasEntity, PCAEntity, ComiteEntity, EntregaFichaEntity, ObservacionesAprendizEntity, PlanMejoramientoEntity, EstadoQuejasEntity, QuejasComiteEntity, ArchivosProyectoEntity, GruposProyectoEntity, TipoArchivoEntity, EstadoDecisionEntity, MotivosComiteEntity]

@Module({
   imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'senastion_2',
      entities: [...allEntities],
      // autoLoadEntities: true,
      synchronize: false,
      // logging: true
   })],
   controllers: [],
   providers: [],
})
export class AppModule { }
