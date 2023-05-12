import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AprendicesEntity } from '../usuarios/aprendices.entity';
import { FichasEntity } from '../area_formativa/ficha.entity';
import { ArchivosProyectoEntity } from './spf_archivos_proyecto.entity';

@Entity('spf_grupos_proyecto')
export class GruposProyectoEntity {
   @PrimaryGeneratedColumn()
   idGrupoProyecto: number;
   
   @Column()
   nombreProyecto: string;

   @OneToMany(() => AprendicesEntity, (aprendices) => aprendices.idGrupoProyecto)
   aprendicesGrupo: AprendicesEntity[];

   @ManyToOne(() => FichasEntity, (fichas) => fichas.gruposFicha)
   @JoinColumn({ name: "idFicha" })
   fichaGrupo: FichasEntity;

   @OneToMany(() => ArchivosProyectoEntity, (proyectoArchivos) => proyectoArchivos.archivoProyecto)
   grupoArchivos: ArchivosProyectoEntity[];
}