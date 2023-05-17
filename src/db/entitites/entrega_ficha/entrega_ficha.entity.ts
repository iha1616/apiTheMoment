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
   ObservacionFicha: string;

   @Column()
   trimestre: number;

   @Column({ type: "datetime", default: () => 'CURRENT_TIMESTAMP' })
   fechaHora: Date;

   @ManyToOne(() => FichasEntity, (ficha) => ficha.entregasFicha)
   @JoinColumn({ name: "idFicha" })
   fichaEntrega: FichasEntity;

   @ManyToOne(() => CompetenciaEntity, (competencia) => competencia.entregasFichaCompetencia)
   @JoinColumn({ name: "idCompetencia" })
   competenciaEntregaFicha: CompetenciaEntity;

   @ManyToOne(() => ResultadoAprendizajeEntity, (resultadoAprendizaje) => resultadoAprendizaje.entregasFichaResultado)
   @JoinColumn({ name: "idResultadoAprendizaje" })
   resultadoEntregaFicha: ResultadoAprendizajeEntity;

   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.entregasFichaUsuario)
   @JoinColumn({ name: "idUsuario" })
   usuarioEntregaFicha: UsuariosEntity;
}