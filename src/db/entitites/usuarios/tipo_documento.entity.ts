import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UsuariosEntity } from './usuarios.entity';

@Entity('tipo_documento')
export class TipoDocumentoEntity {
   @PrimaryGeneratedColumn()
   idTipoDocumento: number;

   @Column()
   nombreTipoDocumento: string;

   @OneToMany(() => UsuariosEntity, (usuario) => usuario.tipoDocumentoUsuario)
   usuariosTipoDocumento: UsuariosEntity[];
}