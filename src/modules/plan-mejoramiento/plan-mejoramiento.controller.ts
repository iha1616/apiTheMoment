import { Controller, Get, Post,Put, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PlanMejoramientoEntity } from 'src/db/entities';  
import { PlanMejoramientoService } from './plan-mejoramiento.service';
import { CreatePlanMejoramientoDto } from './dto/plan-mejoramiento-dto';

@Controller('plan-mejoramiento')
export class PlanMejoramientoController {

    constructor(private planMejoramientoService : PlanMejoramientoService){}

   //  @Get()
   //  getPlan(): Promise<PlanMejoramientoEntity[]>{
   //      return this.planMejoramientoService.getPlan();
   //  }
   @Get()
   getPlan(): Promise<PlanMejoramientoEntity[]>{
       return this.planMejoramientoService.getPlan();
   }
   
   @Get("aprendiz/:id")
   async getPlanAprendiz(@Param("id", ParseIntPipe) id: number) {
      return await this.planMejoramientoService.getPlanAprendiz(id);
   }

    @Get(':id')
    getOnePlan(@Param('id')id:number): Promise<PlanMejoramientoEntity>{
        return this.planMejoramientoService.getOnePlan(id);
    }
    @Post()
    createPlan(@Body() newPlan: CreatePlanMejoramientoDto){
        return this.planMejoramientoService.createPlan(newPlan);
    }





}
