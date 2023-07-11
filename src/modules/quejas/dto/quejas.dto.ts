import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateQuejasDTo {
   @IsNotEmpty()
   @ApiProperty()
   trimestre: number;

   @IsNotEmpty()
   @ApiProperty()
   aprendizQueja: number;

   @IsNotEmpty()
   @ApiProperty()
   usuarioQueja: number;

   @IsNotEmpty()
   @ApiProperty()
   descripcionMotivo: string;

   @IsNotEmpty()
   @ApiProperty()
   motivoQueja: number;

   @IsNotEmpty()
   @ApiProperty()
   estadoQueja: number;

   @ApiProperty()
   archivoQueja?: string;

   @ApiProperty()
   @IsNotEmpty()
   competenciaQueja: number;

   @ApiProperty()
   @IsNotEmpty()
   resultadoAQueja: number;
   
   @ApiProperty()
   comiteQueja?: number;
}

export class UpdateQuejasDTO extends PartialType(CreateQuejasDTo) {


   @ApiProperty()
   decisionQueja?: number;

   @ApiProperty()
   otraDecision?: string;

   @ApiProperty()
   asisteComite?: number;

   @ApiProperty()
   otrosInstructores?: string;
}