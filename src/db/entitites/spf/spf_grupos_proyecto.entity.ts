import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('spf_grupos_proyecto')
export class GruposProyectoEntity {
   @PrimaryGeneratedColumn()
   idGrupoProyecto: number;
   
   @Column()
   nombreProyecto: string;
}