import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
   imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'senastion_2',
      autoLoadEntities: true,
      synchronize: true,
   })],
   controllers: [],
   providers: [],
})
export class AppModule { }
