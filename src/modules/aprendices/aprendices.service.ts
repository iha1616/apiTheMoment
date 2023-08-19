import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccesoEntity, AprendicesEntity } from 'src/db/entities';
import { Repository } from 'typeorm';
import { TipoDocumentoService } from '../tipo-documento/tipo-documento.service';
import { RolesService } from '../roles/roles.service';
import { AccesoService } from '../acceso/acceso.service';
import { DtoAprendiz, UpdateAprendicesDto } from './dto/createDto';
import { plainToClass } from 'class-transformer';


@Injectable()
export class AprendicesService {
   constructor(
      @InjectRepository(AprendicesEntity) private AprendizRepository: Repository<AprendicesEntity>,
      private accesoService: AccesoService
   ) { }

      async createAprendiz(aprendiz: DtoAprendiz): Promise<AprendicesEntity> {
         const validateDocumento = await this.accesoService.getAccesoDocumento(aprendiz.documento)

         if (validateDocumento) {
            throw "Documento ya registrado"
         }

         const createAprendiz = this.AprendizRepository.create(plainToClass(AprendicesEntity, aprendiz))
         const saveAprendiz = await this.AprendizRepository.save(createAprendiz)

         if (!saveAprendiz) {
            throw "F, no se registró"
         }

         const accesoAprendiz = {
            documento: saveAprendiz.documento,
            password: saveAprendiz.documento,
            idUsuarioAprendiz: saveAprendiz.idAprendiz,
            tablaAcceso: 2
         }

         await this.accesoService.createAcceso(plainToClass(AccesoEntity, accesoAprendiz))
         return saveAprendiz
      }

      getAprendizAcceso(documento: number): Promise<AprendicesEntity> {
         return this.AprendizRepository.findOne({
            where: { documento },
            relations: ['tipoDocumentoAprendiz', 'rolAprendiz', 'fichaAprendiz.usuarioFichaDirector', 'fichaAprendiz.programaFicha', 'grupoAprendiz']
         })
      }

      
   async getAprendices() {
      return await this.AprendizRepository.find({
         relations: ['tipoDocumentoAprendiz', 'rolAprendiz', 'fichaAprendiz.usuarioFichaDirector', 'fichaAprendiz.programaFicha', 'grupoAprendiz']
      })
   }

   async getAprendiz(id: number) {
      const aprendizFound = await this.AprendizRepository.findOne({
         where: {
            idAprendiz: id

         },
         relations: ['tipoDocumentoAprendiz', 'rolAprendiz', 'fichaAprendiz.usuarioFichaDirector', 'fichaAprendiz.programaFicha', 'grupoAprendiz']
      });

      if (!aprendizFound) {
         return new HttpException('Aprendiz no encontrado', 404)
      }
      return aprendizFound;

   }


   async updateAprendiz(idAprendiz: any, aprendiz: UpdateAprendicesDto) {
      const searchA = await this.AprendizRepository.findOne({
         where: { idAprendiz }
      })

      if (!searchA) {
         return new HttpException('Aprendiz no encontrado', 404)
      }

      const updateA = this.AprendizRepository.merge(searchA, plainToClass(AprendicesEntity, aprendiz));
      return this.AprendizRepository.save(updateA);
   }

   getAprendicesFicha(fichaAprendiz: any): Promise<AprendicesEntity[]> {
      return this.AprendizRepository.find({
         where: { fichaAprendiz: { codigoFicha: fichaAprendiz } },
         relations: ['tipoDocumentoAprendiz', 'rolAprendiz', 'fichaAprendiz.usuarioFichaDirector', 'fichaAprendiz.programaFicha', 'grupoAprendiz']
      })
   }
}
