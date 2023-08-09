import { Controller,Get, Post, Put, Param, Body, ParseIntPipe, HttpException, HttpStatus  } from '@nestjs/common';
import { AccesoService } from './acceso.service';
import { AccesoEntity } from 'src/db/entities';
import { CreateDtoAcceso, LoginDTO, updateDtoAcceso } from './dto/createDtoAcces';
import { JwtService } from '@nestjs/jwt';

@Controller('acceso')
export class AccesoController {
    constructor(private accesoService: AccesoService, private jwtService : JwtService ){}

    @Get()
    getAccesos(): Promise<AccesoEntity[]>{
        return this.accesoService.getAccesos();
    }

    @Get(':id')
    getAcceso(@Param('id',ParseIntPipe)id:number){
        return this.accesoService.getAcceso(id);
    }

    @Post()
    createAccess(@Body() createAccesDto : CreateDtoAcceso){
        return this.accesoService.createAcceso(createAccesDto);
    }

    @Post("loginValidate")
    async loginValidate(@Body() data: CreateDtoAcceso) {
      return await this.accesoService.loginValidate(data)
    }

    


    
    @Post('login')
    async login(@Body() loginDto: LoginDTO) {
      const { documento, password } = loginDto;
  
      // Buscar en la tabla Acceso por documento y contraseña
      const resultado = await this.accesoService.findByDocumentoAndContraseña(documento, password);
      if (!resultado) {
        throw new HttpException('Credenciales inválidas', HttpStatus.UNAUTHORIZED);
      }
  
      const { acceso, rol } = resultado;
  
      // Generar token
      const payload = { sub: acceso.idAcceso, rol };
      const token = this.jwtService.sign(payload);
  
      return { token };
    }



    @Put(':id')
    updateAccess(@Param('id', ParseIntPipe) id: number, @Body() acceso: updateDtoAcceso){
        return this.accesoService.updateAcceso(id, acceso)
    }
}
