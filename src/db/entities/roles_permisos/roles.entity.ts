import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AprendicesEntity, PermisosEntity, UsuariosEntity } from "..";
import { PrivilegiosEntity } from "./privilegios.entity";

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
   @JoinTable({
      
      name: 'roles_permisos',
      joinColumn: {
         name: 'rolId',
         referencedColumnName: 'idRol',
      },
      inverseJoinColumn: {
         name: 'permisoId',
         referencedColumnName: 'idPermiso',
      },
   })
   permisosRol: PermisosEntity[];

   @ManyToMany(() => PrivilegiosEntity, (privilegios) => privilegios.rol)
   @JoinTable({
      
      name: 'roles_privilegios',
      joinColumn: {
         name: 'rolId',
         referencedColumnName: 'idRol',
      },
      inverseJoinColumn: {
         name: 'privilegioId',
         referencedColumnName: 'idPrivilegio',
      },
   })
   privilegiosRol: PrivilegiosEntity[];



 


     
}
