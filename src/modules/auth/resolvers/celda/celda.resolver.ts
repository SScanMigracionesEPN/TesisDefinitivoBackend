import {
  Args,
  Context,
  Mutation,
  Query,
  Resolver,
  Int,
  Subscription,
} from '@nestjs/graphql';
import { CeldaService } from '../../services/celda/celda.service';
import { Inject } from '@nestjs/common';
import { Celda } from '../../entities/celda.entity';
import { promises } from 'dns';
import { CreateCelda } from '../../dtos/celdas/create-celda.dto';
import { UniqueCelda } from '../../dtos/celdas/unique-celda.dto';

@Resolver()
export class CeldaResolver {
  constructor(@Inject(CeldaService) private celdaService: CeldaService) {}

  @Mutation((returns) => Celda)
  async createCelda(
    @Args('data') data: CreateCelda,
    @Context() ctx,
  ): Promise<Celda> {
    return this.celdaService.create(data);
  }
  
  @Query((returns) => [Celda], { nullable: true })
  async allCeldas(@Context() ctx) {
    return this.celdaService.findAll({});
  }

  /////////// editar

  @Mutation(() => Celda)
  updateCelda(@Args('updateCeldaInput') updateCeldaInput: UniqueCelda) {
    return this.celdaService.update({
      where: { id: updateCeldaInput.id },
      data: updateCeldaInput,
    });
  }

  @Mutation(() => Celda)
  removeCelda(@Args('id', { type: () => Int }) id: number) {
    return this.celdaService.delete({ id });
  }

  @Subscription((returns) => Celda, { name: 'celda' })
  newCelda() {
    return this.celdaService.suscription();
  }
  
  @Query(() => Celda, { name: 'celda' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.celdaService.findOne({ id });
  }
}
