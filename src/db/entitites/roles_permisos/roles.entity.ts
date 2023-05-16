import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PermisosEntity } from "./permisos.entity";
import { UsuariosEntity } from "../usuarios/usuarios.entity";

@Entity('roles')
export class RolesEntity {
   @PrimaryGeneratedColumn()
   idRol: number;

   @Column()
   nombreRol: string;

   @OneToMany(() => UsuariosEntity, (usuario) => usuario.rolUsuario)
   usuariosRol: UsuariosEntity[];

   @ManyToMany(() => PermisosEntity, (permiso) => permiso.rolPermisos)
   permisosRol: PermisosEntity[];
}