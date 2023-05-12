import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PermisosEntity } from "./permisos.entity";
import { UsuariosEntity } from "../usuarios/usuarios.entity";

@Entity('roles')
export class RolesEntity {
   @PrimaryGeneratedColumn()
   idRol: number;

   @Column()
   nombreRol: string;

   @OneToMany(() => UsuariosEntity, (usuario) => usuario.usuarioRol)
   usuariosRol: UsuariosEntity[];

   @ManyToMany(() => PermisosEntity, (permiso) => permiso.roles)
   permisos: PermisosEntity[];
}