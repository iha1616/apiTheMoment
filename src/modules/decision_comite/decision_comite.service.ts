import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DecisionesComiteEntity } from 'src/db/entities';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { CreateDecisionComiteDto, UpdateDecisionComiteDto } from './dto/decision_comite.dto';

@Injectable()
export class DecisionComiteService {
   constructor(@InjectRepository(DecisionesComiteEntity) private decisionService: Repository<DecisionesComiteEntity>) {}

   crearDecision(decision: CreateDecisionComiteDto): Promise<DecisionesComiteEntity> {
      const newDecision = this.decisionService.create(decision);
      return this.decisionService.save(newDecision);
   }

   listarDecisiones(): Promise<DecisionesComiteEntity[]> {
      return this.decisionService.find();
   }

   mostrarDecision(idDecision: any): Promise<DecisionesComiteEntity> {
      return this.decisionService.findOne(idDecision);
   }

   async actualizarDecision(idDecision: any, decision: UpdateDecisionComiteDto) {
      const searchDecision = await this.decisionService.findOne({
         where: { idDecision: idDecision }
      });

      if (!searchDecision) {
         const error = {
            error: "Decisión no encontrada",
            status: false,
         }
         return error
      }
      const validExist = await this.listarDecisiones()
      const validate = validExist.filter(item => item.nombreDecision === decision.nombreDecision)

      if (validate.length > 0) {
         const error = {
            error: "La decisión ya existe",
            status: false,
         }
         return error
      }
      const updateDecision = this.decisionService.merge(plainToClass(DecisionesComiteEntity, searchDecision), plainToClass(DecisionesComiteEntity, decision));
      return this.decisionService.save(updateDecision);
   }
}
