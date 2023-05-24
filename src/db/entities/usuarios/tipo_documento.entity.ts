import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UsuariosEntity } from './usuarios.entity';
import { AprendicesEntity } from './aprendices.entity';

@Entity('tipo_documento')
export class TipoDocumentoEntity {
   @PrimaryGeneratedColumn()
   idTipoDocumento: number;

   @Column()
   nombreTipoDocumento: string;

   //======== Claves foráneas para otras tablas ========
   @OneToMany(() => UsuariosEntity, (usuario) => usuario.tipoDocumentoUsuario)
   usuariosTipoDocumento: UsuariosEntity[];

   @OneToMany(() => AprendicesEntity, (aprendices) => aprendices.tipoDocumentoAprendiz)
   aprendicesTipoDocumento: AprendicesEntity[];
}