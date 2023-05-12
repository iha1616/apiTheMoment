import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CompetenciaEntity } from './competencias.entity';
import { UsuariosEntity } from '../usuarios/usuarios.entity';
import { FichasEntity } from './ficha.entity';

@Entity('programas_formativos')
export class ProgramasFormativosEntity {
   @PrimaryGeneratedColumn()
   idProgramaFormativo: number;

   @Column()
   nombrePF: string;

   @Column()
   codigoPF: number;

   @Column()
   trimestres: number;

   @OneToMany(() => CompetenciaEntity, (competencia) => competencia.idProgramaFormativo)
   competenciasPrograma: CompetenciaEntity[];

   @ManyToMany(() => UsuariosEntity, (usuario) => usuario.programasUsuarios)
   usuariosPrograma: UsuariosEntity[];

   @OneToMany(() => FichasEntity, (fichas) => fichas.programaFicha)
   fichasPrograma: FichasEntity[];
}