import { Controller,Get, Post, Put, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosEntity } from 'src/db/entities/usuarios/usuarios.entity';
import { createUsuarioDto, updateUsuarioDto } from './dto/createUsuarios.dto';

@Controller('usuarios')
export class UsuariosController {
    
    constructor(private usuarioService : UsuariosService){}
    
    @Get()
    getUsuarios(): Promise<UsuariosEntity[]>{
        return this.usuarioService.getUsuarios();
    }

    @Get(':id')
    getUsuario(@Param('id', ParseIntPipe) id : number){
        return this.usuarioService.getUsuario(id);
    }

    @Post()
    createUsua(@Body() usuario){
      return this.usuarioService.createUsuario(usuario)

    }
    @Put(':id')
    updateUsuario(@Param('id', ParseIntPipe)id: number, @Body() user : updateUsuarioDto){
      return this.usuarioService.updateUsuario(id, user)

    }





}
