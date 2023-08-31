import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccesoEntity, AprendicesEntity, UsuariosEntity } from 'src/db/entities';
import { Repository } from 'typeorm';
import { CreateDtoAcceso, LoginDTO, updateDtoAcceso } from './dto/createDtoAcces';
import * as bcrypt from 'bcryptjs';
import { plainToClass } from 'class-transformer';
import * as jwt from 'jsonwebtoken';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable()
export class AccesoService {
   constructor(
      @InjectRepository(AccesoEntity) private accesoService: Repository<AccesoEntity>,
      @InjectRepository(UsuariosEntity) private usuarioService: Repository<UsuariosEntity>,
      @InjectRepository(AprendicesEntity) private aprendizService: Repository<AprendicesEntity>,
   ) { }

   async createAcceso(acceso: CreateDtoAcceso): Promise<AccesoEntity> {
      const saltRounds = 10

      acceso.password = await bcrypt.hash(acceso.password, saltRounds);
      const create = this.accesoService.create(plainToClass(AccesoEntity, acceso));
      return this.accesoService.save(create);
   }

   getAccesoDocumento(documento: number): Promise<AccesoEntity> {
      return this.accesoService.findOne({
         where: { documento }
      })
   }

   async loginValidate(accesoUser: LoginDTO) {
      const validateDocumento = await this.getAccesoDocumento(accesoUser.documento);

      if (!validateDocumento) {
         const error = {
            error: "Documento no encontrado",
            label: "documento",
            status: false,
         }
         console.log(error)
         return error
      }

      const validatePassword = bcrypt.compareSync(accesoUser.password, validateDocumento.password);
      if (!validatePassword) {
         const error = {
            error: "Contraseña incorrecta",
            label: "password",
            status: false,
         }
         console.log(error)
         return error
      }
      
      var dataToken = {}
      const secretKey = "shh"

      if (validateDocumento.tablaAcceso === 1) {
         const userToken = await this.usuarioService.findOne({
            where: { documento: validateDocumento.documento },
            relations: ['tipoDocumentoUsuario', 'rolUsuario']
         });
         dataToken = {
            userInfo: userToken,
            userAccess: validateDocumento
         }
      } else if (validateDocumento.tablaAcceso === 2) {
         const userToken = await this.aprendizService.findOne({
            where: { documento: validateDocumento.documento },
            relations: ['tipoDocumentoAprendiz', 'rolAprendiz', 'fichaAprendiz.usuarioFichaDirector', 'fichaAprendiz.programaFicha', 'grupoAprendiz']
         });
         dataToken = {
            userInfo: userToken,
            userAccess: {
               idAcceso: validateDocumento.idAcceso,
               documento: validateDocumento.documento,
               idUsuarioAprendiz: validateDocumento.idUsuarioAprendiz,
               tablaAcceso: validateDocumento.tablaAcceso,
            },
         }
      }
      // console.log("Valor jwt:", jwt)
      const token = jwt.sign(dataToken, secretKey, { expiresIn: "10h" });
      const data = {
         token,
         userSave: dataToken
      }
      return data;
   }
}
