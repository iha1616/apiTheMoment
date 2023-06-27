import { Module } from '@nestjs/common';
import { AccesoController } from './acceso.controller';
import { AccesoService } from './acceso.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccesoEntity } from 'src/db/entities';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [TypeOrmModule.forFeature([AccesoEntity]), JwtModule.register({
    secret: 'TuClaveSecreta' })],
  controllers: [AccesoController],
  providers: [AccesoService],
  exports: [AccesoService]
})
export class AccesoModule {}
