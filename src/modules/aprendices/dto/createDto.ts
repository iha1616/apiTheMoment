import {IsNotEmpty,IsString, MaxLength, MinLength  } from "class-validator";
import { ApiProperty, PartialType } from "@nestjs/swagger";

export class DtoAprendiz{
    @IsNotEmpty()
    //* Esto hace que se vea en la página de swagger
    @ApiProperty()
    //@MinLength(10)
   // @MaxLength(10)
    documento: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    apellidos: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    email: string;

    @IsNotEmpty()
    @ApiProperty()
    telefono: number;

    // @IsNotEmpty()
    // @IsString()
    // @ApiProperty()
    // password: string;

    // @IsNotEmpty()
    // @ApiProperty()
    // estadoAprendiz: boolean;

    @IsNotEmpty()
    @ApiProperty()
    tipoDocumentoAprendiz: number;

    @IsNotEmpty()
    @ApiProperty()
    rolAprendiz: number;

    // @IsNotEmpty()
    // @ApiProperty()
    // fichaAprendiz: number;

    // @IsNotEmpty()
    // @ApiProperty()
    // grupoAprendiz: number;

    @IsNotEmpty()
    @ApiProperty()
    accesoAprendiz: number;
}

export class UpdateAprendicesDto extends PartialType(DtoAprendiz) {}