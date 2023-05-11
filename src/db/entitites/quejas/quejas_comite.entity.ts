import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quejas_comite')
export class QuejasComiteEntity {
   @PrimaryGeneratedColumn()
   idQueja: number;
   
   @Column()
   descripcionMotivo: string;

   @Column({ nullable: true })
   decisionComite: string;
}