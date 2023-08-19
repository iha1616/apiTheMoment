import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CompetenciaEntity, FichasEntity, ResultadoAprendizajeEntity, UsuariosEntity } from '..';

@Entity('entrega_ficha')
export class EntregaFichaEntity {
   @PrimaryGeneratedColumn()
   idEntregaFicha: number;

   @Column()
   observacionFicha: string;

   @Column()
   trimestre: number;

   @Column({ type: "datetime", default: () => 'CURRENT_TIMESTAMP' })
   fechaHora: Date;

   //======== Claves foránea de otras tablas ========
   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.entregasFichaUsuario, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idUsuario" })
   usuarioEntregaFicha: UsuariosEntity;

   @ManyToOne(() => FichasEntity, (ficha) => ficha.entregasFicha, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idFicha" })
   fichaEntrega: FichasEntity;

   @ManyToOne(() => CompetenciaEntity, (competencia) => competencia.entregasFichaCompetencia, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idCompetencia" })
   competenciaEntregaFicha: CompetenciaEntity;

   @ManyToOne(() => ResultadoAprendizajeEntity, (resultadoAprendizaje) => resultadoAprendizaje.entregasFichaResultado, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idResultadoAprendizaje" })
   resultadoEntregaFicha: ResultadoAprendizajeEntity;
}