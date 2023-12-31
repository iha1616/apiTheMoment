import { Controller, Post, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ComiteService } from './comite.service';
import { CreateComiteDto, UpdateComiteDto } from './dto/comite.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Comité")
@Controller('comite')
export class ComiteController {
   constructor(private comiteService: ComiteService) {}

   // http://localhost:3000/api/comite/
   @Post()
   async crearComite(@Body() comite: CreateComiteDto) {
      return await this.comiteService.crearComite(comite);
   }

   // http://localhost:3000/api/comite/
   @Get()
   async listarComites() {
      return await this.comiteService.listarComites();
   }

   // http://localhost:3000/api/comite/:id
   @Get(":id")
   async mostrarComite(@Param('id', ParseIntPipe) id: number) {
      return await this.comiteService.mostrarComite(id);
   }

   // http://localhost:3000/api/comite/status/:id
   @Get("status/:id")
   async getComiteByStatus(@Param('id', ParseIntPipe) id: number) {
      return await this.comiteService.getComiteByStatus(id);
   }

   // http://localhost:3000/api/comite/:id
   @Post(":id")
   async actualizarComite(@Param('id', ParseIntPipe) id: number, @Body() comite: UpdateComiteDto) {
      return await this.comiteService.actualizarComite(id, comite);
   }
}
