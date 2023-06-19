import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GrupoProyectoService } from './grupo-proyecto.service';
import { CreateGrupoProyectoDto } from './dto/grupo-proyecto.dto';
import { CreateArchivoProyectoDto } from './dto/archivos-proyecto.dto';

@ApiTags("Grupo de Proyecto")
@Controller('grupo-proyecto')
export class GrupoProyectoController {
   constructor(private grupoService: GrupoProyectoService) {}

   // http://localhost:3000/api/grupo-proyecto/
   @Post()
   async crearGrupo(@Body() grupo: CreateGrupoProyectoDto) {
      return await this.grupoService.crearGrupo(grupo);
   }

   // http://localhost:3000/api/grupo-proyecto/
   @Get()
   async listarGrupos() {
      return await this.grupoService.listarGrupos();
   }

   // http://localhost:3000/api/grupo-proyecto/:id
   @Post(":id")
   async actualizarGrupo(@Param('id', ParseIntPipe) id, @Body() grupoActualizar) {
      return await this.grupoService.actualizarGrupo(id, grupoActualizar);
   }

   // http://localhost:3000/api/grupo-proyecto/:id
   @Get(":id")
   async listarGrupo(@Param('id', ParseIntPipe) id) {
      return await this.grupoService.listarGrupo(id);
   }

   // http://localhost:3000/api/grupo-proyecto/archivos
   @Post("archivos")
   async subirArchivo(@Body() archivo) {
      return await this.grupoService.subirArchivo(archivo);
   }

   // http://localhost:3000/api/grupo-proyecto/archivos/:id
   @Get("archivos/:id")
   async listarArchivos(@Param('id', ParseIntPipe) idGrupo) {
      return await this.grupoService.listarArchivos(idGrupo);
   }
}
