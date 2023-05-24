import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FichasEntity } from '../area_formativa/ficha.entity';
import { CompetenciaEntity } from '../area_formativa/competencias.entity';
import { ResultadoAprendizajeEntity } from '../area_formativa/resultado_aprendizaje.entity';
import { UsuariosEntity } from '../usuarios/usuarios.entity';

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