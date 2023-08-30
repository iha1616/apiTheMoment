import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesEntity } from 'src/db/entities/roles_permisos/roles.entity';
import { In, Repository } from 'typeorm';
import { RolesDto, updateRoledto } from './dto/createRoles.dto';
import { PermisosEntity } from 'src/db/entities/roles_permisos/permisos.entity';
// import { RolesPermisosEntity } from 'src/db/entities/roles_permisos/roles_permisos.entity';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(RolesEntity) private RolesRepository: Repository<RolesEntity>,
        @InjectRepository(PermisosEntity) private PermisosRepository: Repository<PermisosEntity>,
        // @InjectRepository(RolesPermisosEntity) private RolesPermisosRepository: Repository<RolesPermisosEntity>,
    ) { }

    createRoles(roles: RolesDto) {
        const newRole = this.RolesRepository.create(roles);
        return this.RolesRepository.save(newRole);
    }

    async getRoles(): Promise<{ id: number; nombre: string; permisos: { id: number; nombre: string; }[] }[]> {
        const roles = await this.RolesRepository.find({
            relations: {
                permisosRol: true
            },
        });

        console.log(roles);

        const rolesConPermisos = roles.map((rol) => ({
            id: rol.idRol,
            nombre: rol.nombreRol,
            permisos: rol.permisosRol.map((permiso) => ({
                id: permiso.idPermiso,
                nombre: permiso.nombrePermiso,
            })),
        }));

        return rolesConPermisos;
    }

    getRol(idRol: number) {
        const rol = this.RolesRepository.findOne({
            where: {
                idRol
            }
        });
        if (!rol) {
            throw new HttpException('Rol no encontrado', 404);
        }
        return rol;
    }

    updateRol(idRol: number, rol: updateRoledto) {
        const roles = this.RolesRepository.update({ idRol }, rol);
        if (!roles) {
            throw new HttpException('Rol no encontrado', 404);
        }

        return roles;
    }

    async asignarPermisosARol(idRol: any, permisosIds: number[]) {
        const rol = await this.RolesRepository.findOne({
            where: {
                idRol
            },
            relations: ['permisosRol'],
        });

        if (!rol) {
            throw new HttpException('Rol no encontrado', 404);
        }

        const permisosExistentes = permisosIds.filter((permisoId) =>
            rol.permisosRol.some((permiso) => permiso.idPermiso === permisoId)
        );

        if (permisosExistentes.length > 0) {
            throw new HttpException('Algunos permisos ya están asignados al rol', 400);
        }

        const permisos = await this.PermisosRepository.find({
            where: {
                idPermiso: In(permisosIds)
            }
        });

        if (permisos.length !== permisosIds.length) {
            throw new HttpException('Algunos permisos no existen', 400);
        }

        rol.permisosRol = [...rol.permisosRol, ...permisos];

        await this.RolesRepository.save(rol);

        return { message: 'Rol asignado correctamente' };
    }

}
