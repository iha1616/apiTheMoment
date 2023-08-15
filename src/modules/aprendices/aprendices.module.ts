import { Module, forwardRef } from '@nestjs/common';
import { AprendicesController } from './aprendices.controller';
import { AprendicesService } from './aprendices.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AprendicesEntity } from 'src/db/entities';
import { AccesoModule } from '../acceso/acceso.module';

@Module({
  imports: [TypeOrmModule.forFeature([AprendicesEntity]), forwardRef(() => AccesoModule)],
  controllers: [AprendicesController],
  providers: [AprendicesService],
  exports:[AprendicesService]
})
export class AprendicesModule {}
