import { Module } from '@nestjs/common';
import { PrivilegiosController } from './privilegios.controller';
import { PrivilegiosService } from './privilegios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrivilegiosEntity } from 'src/db/entities/roles_permisos/privilegios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrivilegiosEntity])],
  controllers: [PrivilegiosController],
  providers: [PrivilegiosService],
  exports : [PrivilegiosService]
})
export class PrivilegiosModule {}
