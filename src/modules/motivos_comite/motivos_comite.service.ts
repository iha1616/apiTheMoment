import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MotivosComiteEntity } from 'src/db/entities';
import { Repository } from 'typeorm';
import { CreateMotivoComiteDto, UpdateMotivoComiteDto } from './dto/motivos_comite.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class MotivosComiteService {
   constructor(@InjectRepository(MotivosComiteEntity) private motivosService: Repository<MotivosComiteEntity>) {}

   crearMotivo(motivo: CreateMotivoComiteDto): Promise<MotivosComiteEntity> {
      const newMotivo = this.motivosService.create(motivo);
      return this.motivosService.save(newMotivo);
   }

   listarMotivos(): Promise<MotivosComiteEntity[]> {
      return this.motivosService.find();
   }

   mostrarMotivo(idMotivo: any): Promise<MotivosComiteEntity> {
      return this.motivosService.findOne(idMotivo);
   }

   actualizarMotivo(idMotivo: any, motivo: UpdateMotivoComiteDto): Promise<MotivosComiteEntity> {
      const searchMotivo = this.motivosService.findOne(idMotivo);

      if (!searchMotivo) {
         throw new Error("Motivo no encontrado");
      }

      const updateMotivo = this.motivosService.merge(plainToClass(MotivosComiteEntity, searchMotivo), plainToClass(MotivosComiteEntity, motivo));
      return this.motivosService.save(updateMotivo);
   }
}
