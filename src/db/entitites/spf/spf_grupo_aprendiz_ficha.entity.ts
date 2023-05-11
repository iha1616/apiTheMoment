import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('spf_grupo_aprendiz_ficha')
export class GrupoAprendizFichaEntity {
   @PrimaryGeneratedColumn()
   idGAF: number;
}