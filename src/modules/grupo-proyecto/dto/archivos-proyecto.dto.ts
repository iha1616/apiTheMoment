import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateArchivoProyectoDto {
   @ApiProperty()
   @IsNotEmpty()
   archivoProyecto: string;

   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   nombreArchivo: string;

   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   observacionArchivoProyecto: string;

   @ApiProperty()
   @IsNotEmpty()
   usuarioArchivo: number;

   @ApiProperty()
   @IsNotEmpty()
   competenciaArchivo: number;

   @ApiProperty()
   @IsNotEmpty()
   resultadoArchivo: number;

   @ApiProperty()
   @IsNotEmpty()
   grupoArchivo: number;
}

export class UpdateArchivoProyectoDto extends PartialType(CreateArchivoProyectoDto) {}