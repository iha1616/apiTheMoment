import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import config from "./config";
import { DatabaseModule } from "./db/database.module";
import { ComiteModule, EntregaFichaModule, GrupoProyectoModule, PlanMejoramientoModule, QuejasModule } from "./modules";
import { ObservacionesAprendizModule } from './modules/observaciones-aprendiz/observaciones-aprendiz.module';


@Module({
   imports: [ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: ".env",
   }), DatabaseModule, GrupoProyectoModule, ComiteModule, QuejasModule, PlanMejoramientoModule, EntregaFichaModule, ObservacionesAprendizModule],
   providers: []
})

export class AppModule {}
