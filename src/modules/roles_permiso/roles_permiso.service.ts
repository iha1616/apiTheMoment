// import { HttpException, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { RolesPermisosEntity } from 'src/db/entities';
// import { Repository } from 'typeorm';
// import { PermisosService } from '../permisos/permisos.service';
// import { RolesService } from '../roles/roles.service';
// import { RolesPermisosDto, updateRolesPermisodto } from './dto/rolespermisoDTO';
// import { plainToClass } from 'class-transformer';

// @Injectable()
// export class RolesPermisoService {
//     constructor(
//         @InjectRepository(RolesPermisosEntity)
//         private rolespermisosRepository: Repository<RolesPermisosEntity>,
//         private permisoService: PermisosService,
//         private rolesService: RolesService
//     ) { }

//     createRolesPermiso(rolespermiso: RolesPermisosDto) {

//         const newRolePermiso = this.rolespermisosRepository.create(plainToClass(RolesPermisosEntity, rolespermiso))
//         return this.rolespermisosRepository.save(newRolePermiso)
//     }

//     getRolesPermiso() {
//         return this.rolespermisosRepository.find()
//     }

//     getRolPermiso(idRolPermiso: number) {
//         const rolP = this.rolespermisosRepository.findOne({
//             where: {
//                 idRolPermiso
//             }
//         })
//         if (!rolP) {
//             return new HttpException('Rol_Permiso no encontrado', 404)
//         }
//         return rolP
//     }

//     async updateRolPermiso(idRolPermiso: any, rolpermiso: updateRolesPermisodto) {
//         const searchRolPermiso = await this.rolespermisosRepository.findOne({
//             where: { idRolPermiso }
//         })

//         if (!searchRolPermiso) {
//             return new HttpException('Rol_permiso no encontrado', 404)
//         }

//         const updateUsua = this.rolespermisosRepository.merge(searchRolPermiso, plainToClass(RolesPermisosEntity, rolpermiso));
//         return this.rolespermisosRepository.save(updateUsua);
//     }





// }
