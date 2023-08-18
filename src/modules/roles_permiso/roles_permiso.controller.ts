import { Body, Controller, Param, ParseIntPipe, Get, Put, Post} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RolesPermisoService } from './roles_permiso.service';
import { RolesPermisosEntity } from 'src/db/entities';
import { RolesPermisosDto, updateRolesPermisodto } from './dto/rolespermisoDTO';

//* Titulo que muestra en swagger
@ApiTags('Roles-Permiso')
@Controller('roles-permiso')
export class RolesPermisoController {
    constructor(private rolespermisosService: RolesPermisoService){}

    @Get()
    getRolesPermisos(): Promise<RolesPermisosEntity[]>{
        return this.rolespermisosService.getRolesPermiso();
    }

    @Get(':id')
    getRol(@Param('id', ParseIntPipe) id:number){
        return this.rolespermisosService.getRolPermiso(id);

    }

    @Post()
    createRoles(@Body() CreateRolDto: RolesPermisosDto): Promise<RolesPermisosEntity>{
        return this.rolespermisosService.createRolesPermiso(CreateRolDto);
    }

    @Put(':id')
    updateRoles(@Param('id', ParseIntPipe) id: number, @Body() roles: updateRolesPermisodto){
        return this.rolespermisosService.updateRolPermiso(id, roles)
    }

    





}
