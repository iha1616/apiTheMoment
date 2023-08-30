import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanMejoramientoEntity } from 'src/db/entities/plan_mejoramiento/plan_mejoramiento.entity';
import { plainToClass } from 'class-transformer';
import { CreatePlanMejoramientoDto, UpdatePlanMejoramientoDTO } from './dto/plan-mejoramiento-dto';

@Injectable()
export class PlanMejoramientoService {
   constructor(@InjectRepository(PlanMejoramientoEntity) private planMejoramientoRepository: Repository<PlanMejoramientoEntity>) { }

   createPlan(plan: CreatePlanMejoramientoDto) {
      const newPlan = this.planMejoramientoRepository.create(plainToClass(PlanMejoramientoEntity, plan))
      return this.planMejoramientoRepository.save(newPlan)
   }
   getPlan() {
      return this.planMejoramientoRepository.find({
         relations: ["quejaPlanMejoramiento.competenciaQueja", "quejaPlanMejoramiento.resultadoAQueja", "usuarioPlanMejoramiento", "aprendizPlanMejoramiento.fichaAprendiz", "decisionPlanMejoramiento", "motivoPlanMejoramiento"]
      })
   }
   // getPlan(usuarioPlanMejoramiento: any) {
   //    return this.planMejoramientoRepository.find({
   //       where: { usuarioPlanMejoramiento: { idUsuario: usuarioPlanMejoramiento } },
   //       relations: ["quejaPlanMejoramiento", "usuarioPlanMejoramiento", "aprendizPlanMejoramiento", "decisionPlanMejoramiento", "motivoPlanMejoramiento"]
   //    })
   // }

   getPlanAprendiz(id: any): Promise<PlanMejoramientoEntity[]> {
      return this.planMejoramientoRepository.find({
         where: { aprendizPlanMejoramiento: { idAprendiz: id } },
         relations: ["quejaPlanMejoramiento", "usuarioPlanMejoramiento", "aprendizPlanMejoramiento", "decisionPlanMejoramiento", "motivoPlanMejoramiento"]
      })
   }

   getOnePlan(id: number) {
      return this.planMejoramientoRepository.findOne({
         where: { idPlanMejoramiento: id },
         relations: ["quejaPlanMejoramiento", "usuarioPlanMejoramiento", "aprendizPlanMejoramiento", "decisionPlanMejoramiento", "motivoPlanMejoramiento"]
      })
   }
   async actualizarGrupo(idPlanMejoramiento: any, plan: UpdatePlanMejoramientoDTO): Promise<PlanMejoramientoEntity> {
      const searchPlan = await this.planMejoramientoRepository.findOne({
         where: { idPlanMejoramiento }
      })

      if (!searchPlan) {
         throw new Error("El plan de mejoramiento no existe");
      }

      const updatePlan = this.planMejoramientoRepository.merge(searchPlan, plainToClass(PlanMejoramientoEntity, plan));
      return this.planMejoramientoRepository.save(updatePlan);
   }

}
