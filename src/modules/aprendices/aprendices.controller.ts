import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AprendicesService } from './aprendices.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AprendicesEntity } from 'src/db/entities';
import { DtoAprendiz, UpdateAprendicesDto } from './dto/createDto';
import * as ExcelJS from 'exceljs';
import * as xlsx from 'xlsx';

@Controller('aprendices')
export class AprendicesController {
    constructor(private aprendicesService: AprendicesService) {}

    @Post()
    async createAprendiz(@Body() aprendiz: DtoAprendiz) {
        return await this.aprendicesService.createAprendiz(aprendiz)
    }
    

    @Get()
    getAprendices(): Promise<AprendicesEntity[]>{
        return this.aprendicesService.getAprendices();
    }

    @Get(':id')
    getAprendiz(@Param('id', ParseIntPipe) id : number){
        return this.aprendicesService.getAprendiz(id);
    }

    @Post(':id')
    updateAprendiz(@Param('id', ParseIntPipe)id: number, @Body() aprendiz : UpdateAprendicesDto){
      return this.aprendicesService.updateAprendiz(id, aprendiz)

    }

    @Get('ficha/:ficha')
    async getAprendicesFicha(@Param("ficha", ParseIntPipe) ficha: number) {
      return await this.aprendicesService.getAprendicesFicha(ficha)
    }



    // @Post('carga')
    // @UseInterceptors(FileInterceptor('file'))
    // async uploadFile(@UploadedFile() file: Express.Multer.File) {
    //   try{

    //     const workbook = new ExcelJS.Workbook();
    //     await workbook.xlsx.load(file.buffer);
        
    //     // Itera sobre cada hoja del archivo Excel
    //     for (const worksheet of workbook.worksheets) {
    //        
    //         const numeroFichaCell = worksheet.getCell('C2');
    //         const numeroFicha = parseInt(numeroFichaCell.text.match(/\d+/)[0], 10);
    //          //consulta a la base de datos 
    //   const fichaEncontrada = await this.aprendicesService.getAprendicesFicha(numeroFicha);

    //   if (!fichaEncontrada) {
    //   
    //     throw new Error(`La ficha con código ${numeroFicha} no existe en la base de datos.`);
    //   }


    //         // Obtén los índices de las columnas
    //         const columnHeaders = worksheet.getRow(6).values as ExcelJS.CellValue[];
    //         const tipoDocumentoIndex = columnHeaders.indexOf('Tipo de documento');
    //         const numeroDocumentoIndex = columnHeaders.indexOf('Número de documento');
    //         const nombreIndex = columnHeaders.indexOf('Nombre');
    //         const apellidosIndex = columnHeaders.indexOf('Apellidos');
    //         const celularIndex = columnHeaders.indexOf('Celular');
    //         const correoIndex = columnHeaders.indexOf('Correo Electrónico');

    //         for (const row of worksheet.getRows(6, worksheet.actualRowCount - 6)) {
    //             const tipoDocumento = row.getCell(tipoDocumentoIndex).text;
    //             console.log('Tipo de documento como cadena:', tipoDocumento);
    //             const numeroDocumento = row.getCell(numeroDocumentoIndex).text;
    //             console.log('Número de documento como cadena:', numeroDocumento);
    //             const nombre = row.getCell(nombreIndex).text;
    //             console.log('Nombre como cadena:', nombre);
    //             const apellidos = row.getCell(apellidosIndex).text;
    //             console.log('Apellido como cadena:', apellidos);
    //             const celular = row.getCell(celularIndex).text;
    //             console.log('celular como cadena:', celular);
    //             const correoElectronico = row.getCell(correoIndex).text;
    //             console.log('correo como cadena:', correoElectronico);
    //             const documento = parseInt(numeroDocumento, 10);
    //             const telefono = parseInt(celular, 10);
    //             const rolAprendiz = 6;
    //             console.log('Número de documento como número:', documento);
    //             console.log('Teléfono como número:', telefono);

    //             // Crea un objeto con los datos del aprendiz
    //             const aprendizData: DtoAprendiz = {
    //                 fichaAprendiz: numeroFicha,
    //                 tipoDocumentoAprendiz: this.mapTipoDocumento(tipoDocumento),
    //                 documento: documento,
    //                 nombre: nombre,
    //                 apellidos: apellidos,
    //                 telefono: telefono,
    //                 email: correoElectronico,
    //                 rolAprendiz: rolAprendiz,
    //               };
                  
    //               
    //               const documentoDuplicado = await this.aprendicesService.isDocumentoDuplicado(documento);
    //               const correoDuplicado = await this.aprendicesService.isCorreoDuplicado(correoElectronico);
                  
    //             if (documentoDuplicado) {
    //                 
    //                 console.error(`Documento duplicado para ${nombre} ${apellidos}`);
    //             } else if (correoDuplicado) {
    //                 
    //                 console.error(`Correo duplicado para ${nombre} ${apellidos}`);
    //             } else {
    //                 
    //                 await this.aprendicesService.createAprendiz(aprendizData);
    //               }
    //             }
    //           }
              
    //           return { message: 'Carga masiva completada' };
    //         }
    //       catch (error) {
    //         
    //         console.error('Error durante la carga masiva:', error.message);
        
    //         
    //         throw new HttpException('Error durante la carga masiva', HttpStatus.BAD_REQUEST);
    //       }
    //     }
            
    //         private mapTipoDocumento(tipoDocumento: string): number {
    //           
    //           const tipoDocumentoMap = {
    //             'CC': 1,
    //             'TI': 2,
    //             'CE': 3,
    //             'Numero ciego SENA' :4,
    //             'PASAPORTE' : 5,
    //             'NIT' : 6,
    //             'PEP - RAMV': 7,
    //             'PEP': 8,
    //             'PPT' : 9
    //           };
              
    //           return tipoDocumentoMap[tipoDocumento] || 0; 
    //         }
            





}
