import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { ApiProperty, PartialType } from "@nestjs/swagger";

export class CreateDtoAcceso{
    @IsNotEmpty()
    //* Esto hace que se vea en la página de swagger
    @ApiProperty()
    //@MinLength(10)
   // @MaxLength(10)
    documento: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password: string;

}

export class updateDtoAcceso extends PartialType(CreateDtoAcceso){}
export class LoginDTO extends PartialType(CreateDtoAcceso){}