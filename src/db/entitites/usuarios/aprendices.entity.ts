import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('aprendices')
export class AprendicesEntity {
   @PrimaryGeneratedColumn()
   idAprendiz: number;

   @Column({ default: true })
   estadoAprendiz: boolean;
}