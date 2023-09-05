import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesEntity } from 'src/db/entities/roles_permisos/roles.entity';
import { PermisosEntity } from 'src/db/entities';
import { PrivilegiosEntity } from 'src/db/entities/roles_permisos/privilegios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RolesEntity, PermisosEntity, PrivilegiosEntity])],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService],
})
export class RolesModule { }