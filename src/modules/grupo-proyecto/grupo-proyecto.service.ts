import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GruposProyectoEntity } from 'src/db/entities';
import { Repository } from 'typeorm';
import { CreateGrupoProyectoDto, UpdateGrupoProyectoDto } from './dto/grupo-proyecto.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class GrupoProyectoService {
   constructor(@InjectRepository(GruposProyectoEntity) private gruposService: Repository<GruposProyectoEntity>) {}

   crearGrupo(grupos: CreateGrupoProyectoDto): Promise<GruposProyectoEntity> {
      const newGrupo = this.gruposService.create(plainToClass(GruposProyectoEntity, grupos));
      return this.gruposService.save(newGrupo);
   }

   listarGrupos(): Promise<GruposProyectoEntity[]> {
      return this.gruposService.find({
         relations: ["fichaGrupo", "fichaGrupo.programaFicha"]
      })
   }

   async actualizarGrupo(idGrupoProyecto: any, grupo: UpdateGrupoProyectoDto): Promise<GruposProyectoEntity> {
      const searchGrupo = await this.gruposService.findOne({
         where: {idGrupoProyecto}
      })

      if (!searchGrupo) {
         throw new Error("El grupo no existe");
      }
         
      const updateGrupo = this.gruposService.merge(searchGrupo, plainToClass(GruposProyectoEntity, grupo));
      return this.gruposService.save(updateGrupo);
   }

   listarGrupo(idGrupoProyecto: any): Promise<GruposProyectoEntity> {
      const searchGrupo = this.gruposService.findOne({ 
         where: { idGrupoProyecto },
         relations: ["fichaGrupo", "fichaGrupo.programaFicha"]
       }, )

      if (!searchGrupo) {
         throw new Error("El grupo no existe");
      }
      return searchGrupo;
   }
}
