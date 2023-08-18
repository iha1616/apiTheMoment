import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComiteEntity } from 'src/db/entities';
import { Repository } from 'typeorm';
import { CreateComiteDto, UpdateComiteDto } from './dto/comite.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ComiteService {
   constructor(@InjectRepository(ComiteEntity) private comiteService: Repository<ComiteEntity>) {}

   crearComite(comite: CreateComiteDto): Promise<ComiteEntity> {
      const newComite = this.comiteService.create(plainToClass(ComiteEntity, comite))
      return this.comiteService.save(newComite);
   }

   listarComites(): Promise<ComiteEntity[]> {
      return this.comiteService.find({
         relations: ["pcaComite.programaFormativo", "pcaComite.usuario"]
         // relations: ["pcaComite", "pcaComite.programaFormativo", "pcaComite.usuario"]
      })
   }

   mostrarComite(idComite: any): Promise<ComiteEntity> {
      return this.comiteService.findOne({
         where: idComite,
         relations: ["pcaComite.programaFormativo", "pcaComite.usuario"]
      })
   }

   actualizarComite(idComite: any, comite: UpdateComiteDto): Promise<ComiteEntity> {
      const searchComite = this.comiteService.findOne({
         where: { idComite }
      });

      if (!searchComite) {
         throw new Error("No se encontró el comité");
      }

      const updateComite = this.comiteService.merge(plainToClass(ComiteEntity, searchComite), plainToClass(ComiteEntity, comite));
      return this.comiteService.save(updateComite);
   }
}
