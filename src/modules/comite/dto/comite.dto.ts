import { IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateComiteDto {
   @IsNotEmpty()
   @ApiProperty()
   fechaHora: Date
   
   @IsNotEmpty()
   @ApiProperty()
   codigoComite: string;

   @IsNotEmpty()
   @ApiProperty()
   pcaComite: number;

   @IsNotEmpty()
   @ApiProperty()
   link?: string;
}

export class UpdateComiteDto extends PartialType(CreateComiteDto) {
   @ApiProperty()
   acta?: string;

   @ApiProperty()
   resolucion?: string;
}