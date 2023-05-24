import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { QuejasComiteEntity } from './quejas_comite.entity';

@Entity("decision_comite")
export class DecisionesComiteEntity {
   @PrimaryGeneratedColumn()
   idDecision: number;

   @Column()
   nombreDecision: string;

   //======== Claves foráneas para otras tablas ========
   @OneToMany(() => QuejasComiteEntity, (quejas) => quejas.decisionQueja)
   quejasDecision: QuejasComiteEntity[];
}