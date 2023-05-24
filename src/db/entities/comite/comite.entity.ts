import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PCAEntity } from '../area_formativa/programa_coordinacion.entity';
import { QuejasComiteEntity } from '../quejas/quejas_comite.entity';

@Entity('comite')
export class ComiteEntity {
   @PrimaryGeneratedColumn()
   idComite: number;

   @Column({ type: "datetime" })
   fechaHora: Date;

   @Column({ type: "bigint" })
   codigoComite: number; 

   @Column({ default: true })
   estadoComite: boolean;
   
   //======== Claves foránea de otras tablas ========
   @ManyToOne(() => PCAEntity, (pca) => pca.comitesPCA, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idProgramaCoordinacion" })
   pcaComite: PCAEntity;

   //======== Claves foráneas para otras tablas ========
   @OneToMany(() => QuejasComiteEntity, (quejas) => quejas.comiteQueja)
   quejasComite: QuejasComiteEntity[];
}