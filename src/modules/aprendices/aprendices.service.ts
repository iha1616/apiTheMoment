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
      private TipoDocu: TipoDocumentoService,
      private Roles: RolesService,
      private accesoService: AccesoService
   ) { }

   async createAprendiz(aprendiz: DtoAprendiz) {
      const AprendizAccesoFound = await this.AprendizRepository.findOne({
         where: {
            documento: aprendiz.documento
         }
      })

      if (AprendizAccesoFound) {
         return new HttpException('Aprendiz ya esta registrado', 400)
      }

      const tipoFound = await this.TipoDocu.getTipo(aprendiz.tipoDocumentoAprendiz)

      if (!tipoFound) {
         return new HttpException('Tipo de documento no encontrado', 404)
      }

      const rolFound = await this.Roles.getRol(aprendiz.rolAprendiz)

      if (!rolFound) {
         return new HttpException('Rol no encontrado', 400)
      }

      // const salt = bcrypt.genSaltSync() 
      // aprendiz.password = bcrypt.hashSync(aprendiz.password, salt)


      const createAccess = {
         documento: aprendiz.documento,
         password: aprendiz.documento
      }
      const newAcceso = await this.accesoService.createAcceso(plainToClass(AccesoEntity, createAccess))
      if (!newAcceso) {
         throw new Error("No se pudo crear el aprendiz");
      }
      aprendiz.accesoAprendiz = newAcceso['idAcceso'];
      const newAprendiz = this.AprendizRepository.create(plainToClass(AprendicesEntity, aprendiz))
      return this.AprendizRepository.save(newAprendiz);
   }


   getAprendices() {
      return this.AprendizRepository.find({
         relations: ['tipoDocumentoAprendiz', 'rolAprendiz', 'fichaAprendiz', 'grupoAprendiz', 'accesoAprendiz']
      })
   }

   async getAprendiz(id: number) {
      const aprendizFound = await this.AprendizRepository.findOne({
         where: {
            idAprendiz: id

         },
         relations: ['tipoDocumentoAprendiz', 'rolAprendiz', 'fichaAprendiz', 'grupoAprendiz', 'accesoAprendiz']
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
         where: { fichaAprendiz },
         relations: ['tipoDocumentoAprendiz', 'rolAprendiz', 'fichaAprendiz', 'grupoAprendiz', 'accesoAprendiz']
      })
   }
}
