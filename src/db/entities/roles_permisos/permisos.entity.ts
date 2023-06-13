import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { RolesEntity } from "..";


@Entity('permisos')
export class PermisosEntity {
   @PrimaryGeneratedColumn()
   idPermiso: number;

   @Column()
   nombrePermiso: string;

   //======== Claves foráneas para otras tablas ========
   @ManyToMany(() => RolesEntity, (rol) => rol.permisosRol)
   rolPermisos: RolesEntity[];
}