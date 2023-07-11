import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccesoEntity } from 'src/db/entities';
import { Repository } from 'typeorm';
import { CreateDtoAcceso, updateDtoAcceso } from './dto/createDtoAcces';
import * as bcrypt from 'bcryptjs';
import { plainToClass } from 'class-transformer';

@Injectable()
export class AccesoService {
   constructor(@InjectRepository(AccesoEntity) private AccesoRepository: Repository<AccesoEntity>) { }

   async createAcceso(acceso: CreateDtoAcceso) {
      try {
         const accesoFound = await this.AccesoRepository.findOne({
            where: {
               documento: acceso.documento,
            }
         })

         if (accesoFound) {
            return new HttpException('Documento ya esta registrado', 400)
         }

         // console.log(accesoFound)

         const hashedPassword = await bcrypt.hashSync(acceso.password, 10);
         // Guardar la contraseña encriptada en la base de datos
         acceso.password = hashedPassword;

         // const salt = bcrypt.genSaltSync() 
         // acceso.password = bcrypt.hashSync(acceso.password, salt)

         const newAcceso = this.AccesoRepository.create(plainToClass(AccesoEntity, acceso))
         return this.AccesoRepository.save(newAcceso);
      } catch (error) {
         console.log(error);
         return new HttpException('Error interno', 500);
      }
   }


   async findByDocumentoAndContraseña(documento: number, password: string): Promise<{ acceso: AccesoEntity; rol: string } | null> {
      const acceso = await this.AccesoRepository.findOne({ where: { documento } });
      const contraseñaCoincide = await bcrypt.compare(password, acceso.password);
      if (acceso) {
         if (contraseñaCoincide) {

            const rol = this.determinarRol(acceso);
            return { acceso, rol };

         }


      }
      return null;
   }

   loginValidate(data: CreateDtoAcceso): Promise<AccesoEntity> {
      const acceso = this.AccesoRepository.findOne({ where: { documento: data.documento } });
      if (acceso) {
         // const contraseñaCoincide = bcrypt.compare(data.password, acceso);
         // if (contraseñaCoincide) {
            return acceso;
         // }
      }
   }

   private determinarRol(acceso: AccesoEntity): string {
      if (acceso.aprendicesAcceso) {
         return 'aprendiz';
      } else if (acceso.usuariosAcceso) {
         return 'usuario';
      }
      return '';
   }


   async getAccesos() {
      return await this.AccesoRepository.find()
   }

   async getAcceso(id: number) {
      const accesoFound = await this.AccesoRepository.findOne({
         where: {
            idAcceso: id
         }
      });

      if (!accesoFound) {
         return new HttpException('Acceso no encontrado', 404)
      }
      return accesoFound

   }

   async updateAcceso(idAcceso: any, acceso: updateDtoAcceso) {
      const searchAcceso = await this.AccesoRepository.findOne({
         where: {
            idAcceso
         }

      });

      if (!searchAcceso) {
         return new HttpException('Acceso no encontrado', 404)

      }

      const updateAcces = this.AccesoRepository.merge(searchAcceso, plainToClass(AccesoEntity, acceso));
      return this.AccesoRepository.save(updateAcces);

   }




}
