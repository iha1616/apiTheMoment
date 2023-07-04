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
    
    @Post()
    createQueja( @Body() newQueja: CreateQuejasDTo): Promise<QuejasComiteEntity>{
        return this.quejasService.createQueja(newQueja);
    }

    @Put(':id')
    updateQuejas(@Body() queja: UpdateQuejasDTO, @Param('id') id: number) {
       return this.quejasService.updateQueja(id, queja);   
   }

   @Get('instructor/:id')
   async getQuejaInstructor(@Param("id", ParseIntPipe) id: number) {
      return this.quejasService.getQuejaInstructor(id);
   }
}