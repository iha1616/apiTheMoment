import { Controller, Get, Post, Put, Body, Param, ParseIntPipe, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PlanMejoramientoEntity } from 'src/db/entities';
import { PlanMejoramientoService } from './plan-mejoramiento.service';
import { CreatePlanMejoramientoDto } from './dto/plan-mejoramiento-dto';
import { diskStorage } from 'multer';

@Controller('plan-mejoramiento')
export class PlanMejoramientoController {

    constructor(private planMejoramientoService: PlanMejoramientoService) { }

    //  @Get()
    //  getPlan(): Promise<PlanMejoramientoEntity[]>{
    //      return this.planMejoramientoService.getPlan();
    //  }
    @Get()
    getPlan(): Promise<PlanMejoramientoEntity[]> {
        return this.planMejoramientoService.getPlan();
    }

    @Get("aprendiz/:id")
    async getPlanAprendiz(@Param("id", ParseIntPipe) id: number) {
        return await this.planMejoramientoService.getPlanAprendiz(id);
    }

    @Get(':id')
    getOnePlan(@Param('id') id: number): Promise<PlanMejoramientoEntity> {
        return this.planMejoramientoService.getOnePlan(id);
    }
    @Post()
    createPlan(@Body() newPlan: CreatePlanMejoramientoDto) {
        return this.planMejoramientoService.createPlan(newPlan);
    }

    // @UseInterceptors(
    //     FileInterceptor(
    //         'file',
    //         {
    //             storage: diskStorage({
    //                 destination: './uploadsPM',
    //                 filename: function(req, file, cb){
    //                     cb(null, file.originalname + '_' + Date.now() )
    //                 }
    //             })
    //         }
    //     )
    // )

    // @Post('file')
    // uplodFile(@UploadedFile() file: Express.Multer.File) {
    //     return {
    //         msg: `Archivo ${file.filename} cargado correctamenta`
    //     }
    // }



}
