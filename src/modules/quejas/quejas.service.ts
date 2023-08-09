import { Injectable } from '@nestjs/common';
import { QuejasComiteEntity } from 'src/db/entities/quejas/quejas_comite.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreateQuejasDTo, UpdateQuejasDTO } from './dto/quejas.dto';

@Injectable()
export class QuejasService {
   constructor(@InjectRepository(QuejasComiteEntity) private quejaRepository: Repository<QuejasComiteEntity>) { }

   async createQueja(queja: CreateQuejasDTo) {
      const newQueja = this.quejaRepository.create(plainToClass(QuejasComiteEntity, queja))
      return await this.quejaRepository.save(newQueja)
   }

   getAllQuejas() {
      return this.quejaRepository.find({
         relations: ["aprendizQueja.fichaAprendiz", "usuarioQueja", "motivoQueja", "estadoQueja", "comiteQueja", "decisionQueja", "competenciaQueja.programasCompetencia", "resultadoAQueja"]
      })
   }

   getQuejaInstructor(id: any): Promise<QuejasComiteEntity[]> {
      return this.quejaRepository.find({
         where: { usuarioQueja: { idUsuario: id } },
         relations: ["aprendizQueja.fichaAprendiz", "usuarioQueja", "motivoQueja", "estadoQueja", "comiteQueja", "decisionQueja", "competenciaQueja.programasCompetencia", "resultadoAQueja"]
      })
   }

   getQuejaComite(id: any): Promise<QuejasComiteEntity[]> {
      return this.quejaRepository.find({
         where: { comiteQueja: { codigoComite: id } },
         relations: ["aprendizQueja.fichaAprendiz", "usuarioQueja", "motivoQueja", "estadoQueja", "comiteQueja", "decisionQueja", "competenciaQueja.programasCompetencia", "resultadoAQueja"]
      })
   }

   getOneQueja(id: number): Promise<QuejasComiteEntity> {
      return this.quejaRepository.findOne({ 
         where: { idQueja: id },
         relations: ["aprendizQueja.fichaAprendiz", "usuarioQueja", "motivoQueja", "estadoQueja", "comiteQueja", "decisionQueja", "competenciaQueja.programasCompetencia", "resultadoAQueja"]
      });
   }

   async updateQueja(idQueja: any, queja: UpdateQuejasDTO): Promise<QuejasComiteEntity> {
      const searchQueja = await this.quejaRepository.findOne({
         where: { idQueja }
      })
      if (!searchQueja) {
         throw new Error("La queja no existe");
      }

      const updateQueja = this.quejaRepository.merge(searchQueja, plainToClass(QuejasComiteEntity, queja));
      return this.quejaRepository.save(updateQueja);
   }
}
