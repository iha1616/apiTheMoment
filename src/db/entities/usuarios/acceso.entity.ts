import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { AprendicesEntity, TipoDocumentoEntity, UsuariosEntity } from '..';

// @Entity('acceso')
// export class AccesoEntity {
//    @PrimaryGeneratedColumn()
//    idAcceso: number;

//    @Column({ type: "bigint" })
//    documento: number;

//    @Column()
//    password: string;

//    //======== Claves foráneas para otras tablas ========
//    @OneToMany(() => UsuariosEntity, (usuario) => usuario.accesoUsuario)
//    usuariosAcceso: UsuariosEntity[];

//    @OneToMany(() => AprendicesEntity, (aprendices) => aprendices.accesoAprendiz)
//    aprendicesAcceso: AprendicesEntity[];
// }

// ! Acceso modificado
@Entity('acceso')
export class AccesoEntity {
   @PrimaryGeneratedColumn()
   idAcceso: number;

   @Column({ type: "bigint" })
   documento: number;

   @Column()
   password: string;

   @Column()
   idUsuarioAprendiz: number;

   @Column()
   tablaAcceso: number;

   @ManyToOne(() => TipoDocumentoEntity, (tipoDocumento) => tipoDocumento.accesoTipoDocumento, { nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE" })
   @JoinColumn({ name: "idTipoDocumento" })
   tipoDocumentoAcceso: TipoDocumentoEntity;

   //======== Claves foráneas de otras tablas ========
}