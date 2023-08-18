import { Controller, Get, Post, Put, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CreateQuejasDTo } from './dto/quejas.dto';
import { QuejasService } from './quejas.service';
import { QuejasComiteEntity } from 'src/db/entities/quejas/quejas_comite.entity'; 
import { UpdateQuejasDTO } from './dto/quejas.dto';

@Controller('quejas')
export class QuejasController {
    constructor(private quejasService: QuejasService){}
    
    @Get()
    getAllQuejas(): Promise<QuejasComiteEntity[]>{
        return this.quejasService.getAllQuejas();
    }

    @Get(':id')
    getOneQueja(@Param('id') id: number): Promise<QuejasComiteEntity>{
        return this.quejasService.getOneQueja(id);
    }
    
    @Get('comite/:id')
    getQuejaComite(@Param('id') id: number): Promise<QuejasComiteEntity[]>{
        return this.quejasService.getQuejaComite(id);
    }

    @Get('programaQueja/:id')
    async getQuejaPCA(@Param("id", ParseIntPipe) id: number) {
      return this.quejasService.getQuejaPCA(id);
    }
    
    @Post()
    createQueja(@Body() newQueja: CreateQuejasDTo): Promise<QuejasComiteEntity>{
        return this.quejasService.createQueja(newQueja);
    }

    @Post(':id')
    updateQuejas(@Param('id', ParseIntPipe) id: number, @Body() queja: UpdateQuejasDTO) {
       return this.quejasService.updateQueja(id, queja);   
   }

   @Get('instructor/:id')
   async getQuejaInstructor(@Param("id", ParseIntPipe) id: number) {
      return this.quejasService.getQuejaInstructor(id);
   }
}