import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PermisosEntity } from "./permisos.entity";
import { UsuariosEntity } from "../usuarios/usuarios.entity";
import { AprendicesEntity } from "../usuarios/aprendices.entity";

@Entity('roles')
export class RolesEntity {
   @PrimaryGeneratedColumn()
   idRol: number;

   @Column()
   nombreRol: string;

   //======== Claves foráneas para otras tablas ========
   @OneToMany(() => UsuariosEntity, (usuario) => usuario.rolUsuario)
   usuariosRol: UsuariosEntity[];

   @OneToMany(() => AprendicesEntity, (aprendices) => aprendices.rolAprendiz)
   aprendicesRol: AprendicesEntity[];

   @ManyToMany(() => PermisosEntity, (permiso) => permiso.rolPermisos)
   permisosRol: PermisosEntity[];
}