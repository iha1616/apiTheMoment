
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AprendicesEntity, UsuariosEntity } from '..';

@Entity('acceso')
export class AccesoEntity {
   @PrimaryGeneratedColumn()
   idAcceso: number;

   @Column()
   documento: number;

   @Column()
   password: string;

   //======== Claves foráneas para otras tablas ========
   @OneToMany(() => UsuariosEntity, (usuario) => usuario.accesoUsuario)
   usuariosAcceso: UsuariosEntity[];

   @OneToMany(() => AprendicesEntity, (aprendices) => aprendices.accesoAprendiz)
   aprendicesAcceso: AprendicesEntity[];
}