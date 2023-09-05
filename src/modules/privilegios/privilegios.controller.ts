import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrivilegiosService } from './privilegios.service';
import { PrivilegiosEntity } from 'src/db/entities/roles_permisos/privilegios.entity';
import { PrivilegiosDto, updatePrivilegiodto } from './dto/privilegios.dto';

@ApiTags('Privilegios')
@Controller('privilegios')
export class PrivilegiosController {
    constructor (private privService : PrivilegiosService){}

    @Get()
    getPrivilgios(): Promise<PrivilegiosEntity[]>{
        return this.privService.getPrivilegios();

    }

    @Get(':id')
    getPrivilgio(@Param('id', ParseIntPipe) id:number){
        return this.getPrivilgio(id);

    }

    @Post()
    crearPrivilegios(@Body()PrivilegiosDto: PrivilegiosDto): Promise<PrivilegiosEntity>{
        return this.privService.createPrivilegios(PrivilegiosDto)

    }

    @Put(':id')
    updatePrivilegio(@Param('id', ParseIntPipe)id: number, @Body()PrivilegiosDto: updatePrivilegiodto)
    {
        return this.privService.updatePrivilegio(id,PrivilegiosDto)

    }

}
