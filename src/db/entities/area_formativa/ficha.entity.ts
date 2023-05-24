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

   @Column({ nullable: true })
   directorFicha: string;

   @Column({ nullable: true })
   voceroFicha: string;
   
   //======== Claves foránea de otras tablas ========
   @ManyToOne(() => ProgramasFormativosEntity, (programaFormativo) => programaFormativo.fichasPrograma, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idProgramaFormativo" })
   programaFicha: ProgramasFormativosEntity;

   //======== Claves foráneas para otras tablas ========
   @OneToMany(() => AprendicesEntity, (aprendices) => aprendices.fichaAprendiz)
   aprendicesFicha: AprendicesEntity[];

   @OneToMany(() => GruposProyectoEntity, (gruposProyecto) => gruposProyecto.fichaGrupo)
   gruposFicha: GruposProyectoEntity[];

   @OneToMany(() => EntregaFichaEntity, (entregaFicha) => entregaFicha.fichaEntrega)
   entregasFicha: EntregaFichaEntity[];
}