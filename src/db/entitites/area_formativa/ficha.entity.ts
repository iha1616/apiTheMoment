import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProgramasFormativosEntity } from './programas_formativos.entity';
import { AprendicesEntity } from '../usuarios/aprendices.entity';
import { GruposProyectoEntity } from '../spf/spf_grupos_proyecto.entity';
import { EntregaFichaEntity } from '../entrega_ficha/entrega_ficha.entity';

@Entity('fichas')
export class FichasEntity {
   @PrimaryGeneratedColumn()
   idFicha: number;

   @Column({ type: "bigint" })
   codigoFicha: number;

   @Column()
   directorFicha: string;

   @Column({ nullable: true })
   voceroFicha: string;

   @OneToMany(() => AprendicesEntity, (aprendices) => aprendices.fichaAprendiz)
   aprendicesFicha: AprendicesEntity[];

   @ManyToOne(() => ProgramasFormativosEntity, (programaFormativo) => programaFormativo.fichasPrograma)
   @JoinColumn({ name: "idProgramaFormativo" })
   programaFicha: ProgramasFormativosEntity;

   @OneToMany(() => GruposProyectoEntity, (gruposProyecto) => gruposProyecto.fichaGrupo)
   gruposFicha: GruposProyectoEntity[];

   @OneToMany(() => EntregaFichaEntity, (entregaFicha) => entregaFicha.fichaEntrega)
   entregasFicha: EntregaFichaEntity[];
}