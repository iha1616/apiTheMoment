import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { RolesEntity } from "./roles.entity";
import { PrivilegiosEntity } from "./privilegios.entity";

@Entity('roles_privilegios')
export class RolesPrivilegiosEntity {
   @PrimaryGeneratedColumn()
   idRolPrivilegio: number;

   @ManyToOne(() => RolesEntity, (rol) => rol.privilegiosRol)
   rol: RolesEntity;

   @ManyToOne(() => PrivilegiosEntity, (privilegio) => privilegio.rol)
   privilegio: PrivilegiosEntity;
}