import { Controller,Get, Post, Put, Param, Body, ParseIntPipe, HttpException, HttpStatus  } from '@nestjs/common';
import { AccesoService } from './acceso.service';
import { LoginDTO } from './dto/createDtoAcces';

@Controller('acceso')
export class AccesoController {
    constructor(private accesoService: AccesoService){}

   @Post('auth')
   async loginValidate(@Body() access: LoginDTO) {
      return await this.accesoService.loginValidate(access);
   }
}
