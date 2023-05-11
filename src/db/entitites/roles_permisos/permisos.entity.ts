import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('permisos')
export class PermisosEntity {
   @PrimaryGeneratedColumn()
   idPermiso: number;

   @Column()
   nombrePermiso: string;
}