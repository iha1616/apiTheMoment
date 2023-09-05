import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrivilegiosEntity } from 'src/db/entities/roles_permisos/privilegios.entity';
import { PrivilegiosDto, updatePrivilegiodto } from './dto/privilegios.dto';

@Injectable()
export class PrivilegiosService {
    constructor(@InjectRepository(PrivilegiosEntity) private privRepository : Repository<PrivilegiosEntity>){}

    createPrivilegios(privilegios : PrivilegiosDto){
        const newPriv = this.privRepository.create(privilegios)
        return this.privRepository.save(newPriv)

    }

    getPrivilegios(){
        return this.privRepository.find()
    }

    getPrivilegio(idPrivilegio: number){
        const privilegios = this.privRepository.findOne({
            where:{
                idPrivilegio
            }
        })
        if(!privilegios){
            return new HttpException('Privilegio no encontrado', 404)
        }

        return privilegios

    }

    updatePrivilegio(idPrivilegio: number, privilegio: updatePrivilegiodto){
        const privilegios= this.privRepository.update({idPrivilegio}, privilegio)
        if(!privilegios){
            return new HttpException('Privilegio no encontrado', 404)
        }
        return privilegios

    }




}
