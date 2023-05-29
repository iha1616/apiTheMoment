import {ApiProperty, PartialType} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";

export class CreatePlanMejoramientoDto {
    @IsNotEmpty()
    @ApiProperty()
    quejaPlanMejoramiento: number;
    @IsNotEmpty()
    @ApiProperty()
    usuarioPlanMejoramiento:number;
    @IsNotEmpty()
    @ApiProperty()
    aprendizPlanMejoramiento:number;

}

export class UpdatePlanMejoramientoDTO extends PartialType(CreatePlanMejoramientoDto){
    @IsNotEmpty()
    @ApiProperty()
    descripcionMotivo?: string;
    @IsNotEmpty()
    @ApiProperty()
    archivoPlanMejoramiento?: string;
    @IsNotEmpty()
    @ApiProperty()
    decisionPlanMejoramiento?:number;
    @IsNotEmpty()
    @ApiProperty()
    motivoPlanMejoramiento?:number;
}