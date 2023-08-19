import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty, PartialType } from "@nestjs/swagger";

export class RolesPermisosDto{
    @IsNotEmpty()
    @IsString()
    //* Esto hace que se vea en la página de swagger
    @ApiProperty()
    tipoPermisoRol: string

    @IsNotEmpty()
    @ApiProperty()
    rol: number

    @IsNotEmpty()
    @ApiProperty()
    permiso: number
}

export class updateRolesPermisodto extends PartialType(RolesPermisosDto) {}