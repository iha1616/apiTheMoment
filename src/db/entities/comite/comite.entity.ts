import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PCAEntity, QuejasComiteEntity } from '..';

@Entity('comite')
export class ComiteEntity {
   @PrimaryGeneratedColumn()
   idComite: number;

   @Column({ type: "datetime" })
   fechaHoraInicio: Date;

   @Column({ type: "datetime" })
   fechaHoraFin: Date;

   @Column({ type: "bigint" })
   codigoComite: number; 

   @Column({ default: false })
   estadoComite: boolean;

   @Column({ nullable: true })
   link: string;

   @Column({ type: "blob", nullable: true })
   acta: string;

   @Column({ type: "blob", nullable: true })
   resolucion: string;
   
   //======== Claves foránea de otras tablas ========
   @ManyToOne(() => PCAEntity, (pca) => pca.comitesPCA, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idProgramaCoordinacion" })
   pcaComite: PCAEntity;

   //======== Claves foráneas para otras tablas ========
   @OneToMany(() => QuejasComiteEntity, (quejas) => quejas.comiteQueja)
   quejasComite: QuejasComiteEntity[];
}