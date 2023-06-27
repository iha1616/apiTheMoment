import { Controller, Post, Get, Put, Param, Body, ParseIntPipe  } from '@nestjs/common';
import { ResultadoAprendizajeService } from './resultado_aprendizaje.service';
import { ResultadoAprendizajeEntity } from 'src/db/entities';
import { UpdateRADto } from './dto/RADto';

@Controller('resultado-aprendizaje')
export class ResultadoAprendizajeController {
    constructor(private raService:ResultadoAprendizajeService) {}

    @Post()
    async createRA(@Body() ra) {
        return await this.raService.createRA(ra)
    }

    @Get()
    getRAs(): Promise<ResultadoAprendizajeEntity[]>{
        return this.raService.getRAS();
    }

    @Get(':id')
    getRA(@Param('id', ParseIntPipe) id : number){
        return this.raService.getRA(id);
    }

    @Put(':id')
    updateRA(@Param('id', ParseIntPipe)id: number, @Body() ra : UpdateRADto){
      return this.raService.updateRA(id, ra)

    }
}
