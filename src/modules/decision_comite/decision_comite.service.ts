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

   actualizarDecision(idDecision: any, decision: UpdateDecisionComiteDto): Promise<DecisionesComiteEntity> {
      const searchDecision = this.decisionService.findOne(idDecision)

      if (!searchDecision) {
         throw new Error("Estado no encontrado");
      }

      const updateDecision = this.decisionService.merge(plainToClass(DecisionesComiteEntity, searchDecision), plainToClass(DecisionesComiteEntity, decision));
      return this.decisionService.save(updateDecision);
   }
}
