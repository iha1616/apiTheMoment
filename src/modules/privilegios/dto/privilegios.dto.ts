import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty, PartialType } from "@nestjs/swagger";

export class PrivilegiosDto{
    @IsNotEmpty()
    @IsString()
    //* Esto hace que se vea en la página de swagger
    @ApiProperty()
    nombrePrivilegio: string
}

export class updatePrivilegiodto extends PartialType(PrivilegiosDto) {}