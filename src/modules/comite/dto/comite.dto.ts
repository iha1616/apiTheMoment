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
}

export class UpdateComiteDto extends PartialType(CreateComiteDto) {}