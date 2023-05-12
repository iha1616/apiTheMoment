import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProgramasFormativosEntity } from './programas_formativos.entity';
import { UsuariosEntity } from '../usuarios/usuarios.entity';
import { ComiteEntity } from '../comite/comite.entity';

@Entity('programa_coordinacion_academica')
export class PCAEntity {
   @PrimaryGeneratedColumn()
   idPCA: number;

   @ManyToOne(() => ProgramasFormativosEntity, (programaFormativo) => programaFormativo.usuariosPrograma)
   @JoinColumn({ name: "idProgramaFormativo" })
   idPrograma: ProgramasFormativosEntity;

   @ManyToOne(() => UsuariosEntity, (usuarios) => usuarios.programasUsuarios)
   @JoinColumn({ name: "idUsuario" })
   idUsuario: UsuariosEntity;

   @OneToMany(() => ComiteEntity, (comitePrograma) => comitePrograma.programaCoordinacion)
   comites: ComiteEntity[];
}