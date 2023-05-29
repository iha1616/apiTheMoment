import {ApiProperty, PartialType} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class CreateQuejasDTo {
    @IsNotEmpty()
    @ApiProperty()
    aprendizQueja: number;

    @IsNotEmpty()
    @ApiProperty()
    usuarioQueja: number;
    
    @IsNotEmpty()
    @ApiProperty()
    descripcionMotivo:string;

    @IsNotEmpty()
    @ApiProperty()
    motivoQueja: number;
    
    @IsNotEmpty()
    @ApiProperty()
    estadoQueja: number;

}

export class UpdateQuejasDTO extends PartialType(CreateQuejasDTo){
    
    @ApiProperty()
    comiteQueja?:number;
    
    @ApiProperty()
    decisionQueja?:number;
    
}