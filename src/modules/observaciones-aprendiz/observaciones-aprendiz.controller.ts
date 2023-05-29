import { Body, Controller, Get, Post, Put,Param } from '@nestjs/common';
import { ObservacionesAprendizService } from './observaciones-aprendiz.service';
import { ObservacionesAprendizEntity } from 'src/db/entities';
import { actualizarObservacionAprendizDto, crearObservacionAprendizDto } from './Dto/crear-observacion-aprendiz-dto';

@Controller('observaciones-aprendiz')
export class ObservacionesAprendizController {

    constructor(private observacionesAprendiz: ObservacionesAprendizService){}
    
    @Get()
    getAllQuejas(): Promise<ObservacionesAprendizEntity[]>{
        return this.observacionesAprendiz.getAllobservacionAprendiz();
    }
    @Get(':id')
    getOneObservacion(@Param('id') id: number): Promise<ObservacionesAprendizEntity>{
        return this.observacionesAprendiz.getOneObservacionAprendiz(id);
    }
    @Post()
    createQueja( @Body() newQueja: crearObservacionAprendizDto): Promise<ObservacionesAprendizEntity>{
        return this.observacionesAprendiz.create(newQueja) ;
    }
   /*  @Put(':id')
    updateQuejas(@Body() observacionAprendiz:actualizarObservacionAprendizDto, @Param('id')id:number) {
       return this.observacionesAprendiz.updateObservacionAprendiz(id, observacionAprendiz);   
   } */
}

