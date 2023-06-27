import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoDocumentoService } from '../tipo-documento/tipo-documento.service';
import { RolesService } from '../roles/roles.service';
import { UsuariosEntity } from '../../db/entities/usuarios/usuarios.entity';
import * as bcrypt from 'bcryptjs';
import { createUsuarioDto, updateUsuarioDto } from './dto/createUsuarios.dto';
import { plainToClass } from 'class-transformer';
import { AccesoService } from '../acceso/acceso.service';
import { AccesoEntity } from 'src/db/entities';


@Injectable()
export class UsuariosService {
    constructor(@InjectRepository(UsuariosEntity) private UsuariosRepository: Repository<UsuariosEntity>, 
    private TipoDocuService : TipoDocumentoService, 
    private Roles : RolesService,
    private accesoService: AccesoService
    ){}

    async createUsuario(usuario: createUsuarioDto) {
        const usuarioFound = await this.UsuariosRepository.findOne({
            where: {
                documento: usuario.documento,
            },
        });

        if (usuarioFound) {
            throw new HttpException('Usuario ya está registrado', 400);
        }

        const tipoFound = await this.TipoDocuService.getTipo(usuario.tipoDocumentoUsuario);

        if (!tipoFound) {
            throw new HttpException('Tipo de documento no encontrado', 404);
        }

        const rolFound = await this.Roles.getRol(usuario.rolUsuario);

        if (!rolFound) {
            throw new HttpException('Rol no encontrado', 400);
        }

        const createAccesso = {
            documento: usuario.documento,
            password: usuario.documento,
        };

        const newAcceso = await this.accesoService.createAcceso(plainToClass(AccesoEntity, createAccesso));

        if (!(newAcceso instanceof AccesoEntity)) {
            throw new HttpException('No se pudo crear el Usuario', 500);
        }

        const newUsuario = plainToClass(UsuariosEntity, usuario);
        newUsuario.accesoUsuario = newAcceso;

        return this.UsuariosRepository.save(newUsuario);
    }

    getUsuarios(){
        return this.UsuariosRepository.find({
            relations : ['tipoDocumentoUsuario', 'rolUsuario']
        });
    }

    async getUsuario(id: number){

        const usuarioFound = await this.UsuariosRepository.findOne({
            where:{
                idUsuario : id
                
            },
            relations : ['tipoDocumentoUsuario', 'rolUsuario']
        });

        if(!usuarioFound){
            return new HttpException('Usuario no encontrado', 404)
        }
        return usuarioFound;
    }

     async updateUsuario(idUsuario: any, usuario: updateUsuarioDto){
        const searchUsua = await this.UsuariosRepository.findOne({
           where: { idUsuario }
        })
  
        if (!searchUsua) {
            return new HttpException('Usuario no encontrado', 404)
        }
  
        const updateUsua = this.UsuariosRepository.merge(searchUsua, plainToClass(UsuariosEntity, usuario));
        return this.UsuariosRepository.save(updateUsua);
     }







}
