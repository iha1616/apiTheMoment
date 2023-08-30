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

   async actualizarMotivo(idMotivo: any, motivo: UpdateMotivoComiteDto) {
      const searchMotivo = await this.motivosService.findOne({
         where: { idMotivoComite: idMotivo }
      });

      if (!searchMotivo) {
         const error = {
            error: "Motivo no encontrado",
            status: false,
         }
         return error
      }
      const validExist = await this.listarMotivos()
      const validate = validExist.filter(item => item.nombreMotivo === motivo.nombreMotivo)

      if (validate.length > 0) {
         const error = {
            error: "El motivo ya existe",
            status: false,
         }
         return error
      }

      const updateMotivo = this.motivosService.merge(plainToClass(MotivosComiteEntity, searchMotivo), plainToClass(MotivosComiteEntity, motivo));
      const updated = await this.motivosService.save(updateMotivo);

      return {
         data: updated,
         success: {
            success: "Motivo actualizado correctamente",
            status: 200
         }
      }
   }
}
