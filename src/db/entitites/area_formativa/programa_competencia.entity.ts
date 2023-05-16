import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProgramasFormativosEntity } from "./programas_formativos.entity";
import { CompetenciaEntity } from "./competencias.entity";

@Entity('programa_competencia')
export class ProgramaCompetenciaEntity {
   @PrimaryGeneratedColumn()
   idProgramaCompetencia: number;

   @ManyToOne(() => ProgramasFormativosEntity, (programaFormativo) => programaFormativo.competenciaPrograma)
   @JoinColumn({ name: "idProgramaFormativo" })
   programaFormativo: ProgramaCompetenciaEntity;

   @ManyToOne(() => CompetenciaEntity, (competencia) => competencia.programasCompetencia)
   @JoinColumn({ name: "idCompetencia" })
   competencia: CompetenciaEntity;
}