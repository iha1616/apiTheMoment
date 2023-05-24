import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProgramasFormativosEntity } from './programas_formativos.entity';
import { UsuariosEntity } from '../usuarios/usuarios.entity';
import { ComiteEntity } from '../comite/comite.entity';

@Entity('programa_coordinacion')
export class PCAEntity {
   @PrimaryGeneratedColumn()
   idPCA: number;

   //======== Claves foránea de otras tablas ========
   @ManyToOne(() => ProgramasFormativosEntity, (programaFormativo) => programaFormativo.usuariosPrograma, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idProgramaFormativo" })
   programaFormativo: ProgramasFormativosEntity;

   @ManyToOne(() => UsuariosEntity, (usuarios) => usuarios.programaUsuarios, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idUsuario" })
   usuario: UsuariosEntity;

   //======== Claves foráneas para otras tablas ========
   @OneToMany(() => ComiteEntity, (comite) => comite.pcaComite)
   comitesPCA: ComiteEntity[];
}