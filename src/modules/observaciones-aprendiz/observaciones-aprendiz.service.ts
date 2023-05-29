import { Injectable } from '@nestjs/common';
import { ObservacionesAprendizEntity } from 'src/db/entities/entrega_ficha/observaciones_aprendiz.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { actualizarObservacionAprendizDto, crearObservacionAprendizDto } from './Dto/crear-observacion-aprendiz-dto';
import { QuejasService } from '../quejas/quejas.service';


@Injectable()
export class ObservacionesAprendizService {

    constructor(
        @InjectRepository(ObservacionesAprendizEntity) private observacionesService  : Repository<ObservacionesAprendizEntity>,
        private quejasService: QuejasService
    ){}

    async create(observacion: crearObservacionAprendizDto){
        const newQueja =  this.observacionesService.create(plainToClass(ObservacionesAprendizEntity, observacion))


        const queja = await this.quejasService.createQueja({
            aprendizQueja: observacion.aprendizObservacion,
            usuarioQueja: observacion.usuarioObservacion,
            descripcionMotivo: observacion.descripcionMotivo,
            motivoQueja: observacion.motivoObservacion,
            estadoQueja: 1
        });

        if(!queja) {
            throw new Error("No se pudo guardar la observacion")
        }

        return await this.observacionesService.save(newQueja)
    } 
    getAllobservacionAprendiz(){
        return this.observacionesService.find({
            relations: ["aprendizObservacion", "usuarioObservacion", "decisionObservacion", "motivoObservacion"]
        })
    }
    
    getOneObservacionAprendiz(idObservaciones: number): Promise<ObservacionesAprendizEntity>{
        return this.observacionesService.findOne({where : { idObservacionAprendiz: idObservaciones }});
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
