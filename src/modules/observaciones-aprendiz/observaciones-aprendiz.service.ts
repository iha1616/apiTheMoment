import { Injectable } from '@nestjs/common';
import { ObservacionesAprendizEntity } from 'src/db/entities/entrega_ficha/observaciones_aprendiz.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { crearObservacionAprendizDto } from './Dto/crear-observacion-aprendiz-dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Observaciones del Aprendiz")
@Injectable()
export class ObservacionesAprendizService {
   constructor(@InjectRepository(ObservacionesAprendizEntity) private observacionesService: Repository<ObservacionesAprendizEntity>) { }

   async create(observacion: crearObservacionAprendizDto) {
      const newQueja = this.observacionesService.create(plainToClass(ObservacionesAprendizEntity, observacion))
      return await this.observacionesService.save(newQueja)
      //! Se debe crear la queja desde aquí (tal vez recibiendo dos parámetros)
   }

   //  getAllobservacionAprendiz(){
   //      return this.observacionesService.find({
   //          relations: ["aprendizObservacion", "usuarioObservacion", "decisionObservacion"]
   //      })
   //  }

   getAllobservacionAprendiz(aprendizObservacion) {
      return this.observacionesService.find({
         where: aprendizObservacion,
         relations: ["aprendizObservacion", "usuarioObservacion", "decisionObservacion"]
      })
   }

   getOneObservacionAprendiz(idObservaciones: number): Promise<ObservacionesAprendizEntity> {
      return this.observacionesService.findOne({
         where: { idObservacionAprendiz: idObservaciones },
         relations: ["aprendizObservacion", "usuarioObservacion", "decisionObservacion"]
      });
   }

   /* async updateObservacionAprendiz(idObservaciones: any, observacionAprendiz: actualizarObservacionAprendizDto): Promise<ObservacionesAprendizEntity> {
       const searchObservacion = await this.observacionesService.findOne({
          where: {}
       })
 
       if (!searchObservacion) {
          throw new Error("La queja no existe");
       }
          
       const updateQueja = this.observacionesService.merge(searchObservacion, plainToClass(ObservacionesAprendizEntity, observacionAprendiz));
       return this.observacionesService.save(updateQueja);
    } */
}
