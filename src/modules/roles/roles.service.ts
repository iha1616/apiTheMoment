import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesEntity } from 'src/db/entities/roles_permisos/roles.entity';
import { Repository } from 'typeorm';
import { RolesDto, updateRoledto } from './dto/createRoles.dto';

@Injectable()
export class RolesService {
    constructor(@InjectRepository(RolesEntity) private RolesRepository: Repository<RolesEntity>) { }

    createRoles(roles: RolesDto) {

        const newRole = this.RolesRepository.create(roles)
        return this.RolesRepository.save(newRole)

    }

    getRoles() {
        return this.RolesRepository.find()
    }

    getRol(idRol: number) {
        const rol = this.RolesRepository.findOne({
            where: {
                idRol
            }
        })
        if (!rol) {
            return new HttpException('Rol no encontrado', 404)
        }
        return rol
    }

    updateRol(idRol: number, rol: updateRoledto) {
        const roles = this.RolesRepository.update({ idRol }, rol)
        if (!roles) {
            return new HttpException('Rol no encontrado', 404)
        }

        return roles

    }

}
