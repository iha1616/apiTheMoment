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

   @Column({ type: "datetime" })
   fechaHora: Date;

   @ManyToOne(() => FichasEntity, (ficha) => ficha.entregasFicha)
   @JoinColumn({ name: "idFicha" })
   ficha: FichasEntity;

   @ManyToOne(() => CompetenciaEntity, (competencia) => competencia.entregasCompetencia)
   @JoinColumn({ name: "idCompetencia" })
   competencia: CompetenciaEntity;

   @ManyToOne(() => ResultadoAprendizajeEntity, (resultadoAprendizaje) => resultadoAprendizaje.entregasResultadoAprendizaje)
   @JoinColumn({ name: "idResultadoAprendizaje" })
   resultadoAprendizaje: ResultadoAprendizajeEntity;

   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.entregasUsuario)
   @JoinColumn({ name: "idUsuario" })
   usuario: UsuariosEntity;
}