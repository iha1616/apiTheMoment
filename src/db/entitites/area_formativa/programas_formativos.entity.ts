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

   @Column({ type: "bigint" })
   codigoPF: number;

   @Column()
   trimestres: number;

   @ManyToMany(() => CompetenciaEntity, (competencia) => competencia.programasCompetencia)
   competenciaPrograma: CompetenciaEntity[];

   @ManyToMany(() => UsuariosEntity, (usuario) => usuario.programaUsuarios)
   usuariosPrograma: UsuariosEntity[];

   @OneToMany(() => FichasEntity, (fichas) => fichas.programaFicha)
   fichasPrograma: FichasEntity[];
}