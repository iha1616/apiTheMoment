import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('programa_coordinacion_academica')
export class PCAEntity {
   @PrimaryGeneratedColumn()
   idPCA: number;
}