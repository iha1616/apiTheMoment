import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PCAEntity } from '../area_formativa/programa_coordinacion_academica.entity';
import { QuejasComiteEntity } from '../quejas/quejas_comite.entity';

@Entity('comite')
export class ComiteEntity {
   @PrimaryGeneratedColumn()
   idComite: number;

   @Column({ type: "datetime" })
   fechaHora: Date;

   @Column()
   codigoComite: number;

   @ManyToOne(() => PCAEntity, (pca) => pca.comites)
   @JoinColumn({ name: "idProgramaCoordinacionAcademica" })
   programaCoordinacion: PCAEntity;

   @OneToMany(() => QuejasComiteEntity, (quejas) => quejas.quejaComite)
   comitesQuejas: QuejasComiteEntity[];
}