import { producto } from './producto.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class categorias{
    @PrimaryGeneratedColumn()
    id_cat:number

    @Column({type:'varchar',length:20})
    nombre_cat:string

    @Column({type:'varchar',length:20})
    det_cat:string

    @OneToMany(()=>producto,pro=>pro.id_prod,{cascade:true})
    id_prod:producto
}