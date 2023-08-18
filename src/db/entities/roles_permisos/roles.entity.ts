import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AprendicesEntity, PermisosEntity, UsuariosEntity } from "..";

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