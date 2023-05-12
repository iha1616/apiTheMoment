import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { RolesEntity } from "./roles.entity";


@Entity('permisos')
export class PermisosEntity {
   @PrimaryGeneratedColumn()
   idPermiso: number;

   @Column()
   nombrePermiso: string;

   @ManyToMany(() => RolesEntity, (rol) => rol.permisos)
   roles: RolesEntity[];
}