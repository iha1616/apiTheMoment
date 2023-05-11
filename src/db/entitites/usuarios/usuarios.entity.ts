import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class UsuariosEntity {
   @PrimaryGeneratedColumn()
   idUsuario: number;

   @Column({ unique: true })
   documento: number;

   @Column()
   nombre: string;

   @Column()
   apellidos: string;

   @Column({ unique: true })
   email: string;

   @Column()
   telefono: number;

   @Column()
   password: string;
}