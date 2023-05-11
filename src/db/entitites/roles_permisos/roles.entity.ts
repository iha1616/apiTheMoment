import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class RolesEntity {
   @PrimaryGeneratedColumn()
   idRol: number;

   @Column()
   nombreRol: string;
}