import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FichaUsuariosEntity } from 'src/db/entities';
import { Repository } from 'typeorm';
import { FichasService } from '../fichas/fichas.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import { CreateDtoFichasUsua, UpdateDtoFichasUsua } from './dto/FichaUsuaDTO';
import { plainToClass } from 'class-transformer';

@Injectable()
export class FichaUsuarioService {
    constructor(@InjectRepository(FichaUsuariosEntity) private FUrepository: Repository<FichaUsuariosEntity>,
    private FichaService : FichasService,
    private UsuarioService : UsuariosService
    ){}

    async createFichaUsua(fichaUsua: CreateDtoFichasUsua){
        const FichaFound = await this.FichaService.getFicha(fichaUsua.ficha)

        if(!FichaFound){
            return new HttpException('Ficha no encontrada', 400)
        }
        const UsuaFound = await this.UsuarioService.getUsuario(fichaUsua.usuario)

        if(!UsuaFound){
            return new HttpException('Usuario no encontrado', 400)
        }
        const newFichaUsua = this.FUrepository.create(plainToClass(FichaUsuariosEntity, fichaUsua))
        return this.FUrepository.save(newFichaUsua);

    }


    getFichaUsuas(){
        return this.FUrepository.find({
            relations: ['ficha', 'usuario']
        })
    }

    async getFichaUsua(id: number){
        const FichaUFound = await this.FUrepository.findOne({
            where:{
                idFichaUsuario : id
                
            },
            relations : ['ficha', 'usuario']
        });

        if(!FichaUFound){
            return new HttpException('Ficha-Usuario no encontrada', 404)
        }
        return FichaUFound;

    }


    async updateFichaUsua(idFichaUsuario: any, fichaUsua: UpdateDtoFichasUsua){
        const searchFU = await this.FUrepository.findOne({
           where: { idFichaUsuario }
        })
  
        if (!searchFU) {
            return new HttpException('Ficha-Usuario no encontrada', 404)
        }
  
        const updateFU = this.FUrepository.merge(searchFU, plainToClass(FichaUsuariosEntity, fichaUsua));
        return this.FUrepository.save(updateFU);
     }
}
