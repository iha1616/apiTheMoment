import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import config from "./config";
import { DatabaseModule } from "./db/database.module";
import { GrupoProyectoModule } from './modules/grupo-proyecto/grupo-proyecto.module';
import { ComiteModule } from './modules/comite/comite.module';

@Module({
   imports: [ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: ".env",
   }), DatabaseModule, GrupoProyectoModule, ComiteModule]
})

export class AppModule {}
