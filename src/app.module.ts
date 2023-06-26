import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import config from "./config";
import { DatabaseModule } from "./db/database.module";
import { ComiteModule, EntregaFichaModule, GrupoProyectoModule, PlanMejoramientoModule, QuejasModule } from "./modules";
import { ObservacionesAprendizModule } from './modules/observaciones-aprendiz/observaciones-aprendiz.module';
import { EstadoDecisionModule } from './modules/estado_decision/estado_decision.module';
import { MotivosComiteModule } from './modules/motivos_comite/motivos_comite.module';
import { DecisionComiteModule } from "./modules/decision_comite/decision_comite.module";
import { EstadoQuejasModule } from "./modules/estado_quejas/estado_quejas.module";


@Module({
   imports: [ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: ".env",
   }), DatabaseModule, GrupoProyectoModule, ComiteModule, QuejasModule, PlanMejoramientoModule, EntregaFichaModule, ObservacionesAprendizModule, EstadoDecisionModule, MotivosComiteModule, DecisionComiteModule, EstadoQuejasModule],
   providers: []
})

export class AppModule {}
