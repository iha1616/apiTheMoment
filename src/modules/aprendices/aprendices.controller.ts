import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AprendicesService } from './aprendices.service';
import { AprendicesEntity } from 'src/db/entities';
import { UpdateAprendicesDto } from './dto/createDto';

@Controller('aprendices')
export class AprendicesController {
    constructor(private aprendicesService: AprendicesService) {}

    @Post()
    async createAprendiz(@Body() aprendiz) {
        return await this.aprendicesService.createAprendiz(aprendiz)
    }

    @Get()
    getAprendices(): Promise<AprendicesEntity[]>{
        return this.aprendicesService.getAprendices();
    }

    @Get(':id')
    getAprendiz(@Param('id', ParseIntPipe) id : number){
        return this.aprendicesService.getAprendiz(id);
    }

    @Put(':id')
    updateAprendiz(@Param('id', ParseIntPipe)id: number, @Body() aprendiz : UpdateAprendicesDto){
      return this.aprendicesService.updateAprendiz(id, aprendiz)

    }
}
