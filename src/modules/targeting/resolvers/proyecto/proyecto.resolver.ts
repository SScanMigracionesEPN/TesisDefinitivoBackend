import { Inject } from '@nestjs/common';
import {
  Args,
  Context,
  Int,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';

import { CreateProyecto } from '../../dtos/proyectos/create-proyecto.dto';
import { UniqueProyecto } from '../../dtos/proyectos/unique-proyecto.dto';
import { Proyecto } from '../../entities/proyecto.entity';
import { ProyectoService } from '../../services/proyecto/proyecto.service';

@Resolver()
export class ProyectoResolver {
  constructor(
    @Inject(ProyectoService) private proyectoService: ProyectoService,
  ) {}

  @Mutation((returns) => Proyecto)
  async createProyecto(
    @Args('data') data: CreateProyecto,
    @Context() ctx,
  ): Promise<Proyecto> {
    return this.proyectoService.create(data);
  }
  @Query((returns) => [Proyecto], { nullable: true })
  async allProyectos(@Context() ctx) {
    return this.proyectoService.findAll({});
  }

  @Mutation(() => Proyecto)
  updateProyecto(
    @Args('updateProyectoInput') updateProyectoInput: UniqueProyecto,
  ) {
    return this.proyectoService.update({
      where: { id: updateProyectoInput.id },
      data: updateProyectoInput,
    });
  }

  @Mutation(() => Proyecto)
  removeProyecto(@Args('id', { type: () => Int }) id: number) {
    return this.proyectoService.delete({ id });
  }

  @Subscription((returns) => Proyecto, { name: 'proyecto' })
  newProyecto() {
    return this.proyectoService.suscription();
  }
  @Query(() => Proyecto, { name: 'proyecto' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.proyectoService.findOne({ id });
  }
}
