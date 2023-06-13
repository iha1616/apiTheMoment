import { Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { FichasEntity, UsuariosEntity } from '..';

@Entity('ficha_usuarios')
export class FichaUsuariosEntity {
   @PrimaryGeneratedColumn()
   idFichaUsuario: number;

   //======== Claves foráneas de otras tablas ========
   @OneToMany(() => UsuariosEntity, (usuario) => usuario.fichaUsuario)
   @JoinColumn({ name: "idUsuario" })
   usuario: UsuariosEntity;

   @OneToMany(() => FichasEntity, (fichas) => fichas.usuarioFicha)
   @JoinColumn({ name: "idFicha" })
   ficha: FichasEntity;
}