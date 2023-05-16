import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PCAEntity } from '../area_formativa/programa_coordinacion_academica.entity';
import { QuejasComiteEntity } from '../quejas/quejas_comite.entity';

@Entity('comite')
export class ComiteEntity {
   @PrimaryGeneratedColumn()
   idComite: number;

   @Column({ type: "datetime" })
   fechaHora: Date;

   @Column({ type: "bigint" })
   codigoComite: number; 

   @ManyToOne(() => PCAEntity, (pca) => pca.comitesPCA)
   @JoinColumn({ name: "idProgramaCoordinacionAcademica" })
   pcaComite: PCAEntity;

   @OneToMany(() => QuejasComiteEntity, (quejas) => quejas.comiteQueja)
   quejasComite: QuejasComiteEntity[];
}