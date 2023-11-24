
import { Args, Context, Mutation, Query, Resolver,Int, Subscription  } from '@nestjs/graphql';
import { EstadoService } from '../../services/estado/estado.service';
import { Inject } from '@nestjs/common';
import { Estado } from '../../entities/estado.entity';
import { promises } from 'dns';
import { CreateEstado } from '../../dtos/estados/create-estado.dto';
import { UniqueEstado } from '../../dtos/estados/unique-estado.dto';


@Resolver()
export class EstadoResolver {
    constructor(@Inject(EstadoService) private estadoService: EstadoService) { }


    @Mutation((returns) => Estado)
    async create(
        @Args("data") data: CreateEstado,
        @Context() ctx
    ): Promise<Estado> {
        return this.estadoService.create(data)

    }
    @Query((returns) => [Estado], { nullable: true })
    async allEstados(@Context() ctx) {
        return this.estadoService.findAll({});
    }


    /////////// editar

    @Mutation(() => Estado)
    updateEstado(@Args('updateEstadoInput') updateEstadoInput: UniqueEstado) {
        return this.estadoService.update({ where: { id: updateEstadoInput.id }, data: updateEstadoInput });
    }   //salia error porque no tiene estado originalmente.


    @Mutation(() => Estado)
    removeEstado(@Args('id', { type: () => Int }) id: number) {
        return this.estadoService.delete({id});
    }

    @Subscription((returns) => Estado,{name:'estado'})
    newEstado() {
        return this.estadoService.suscription();
  }
    @Query(() => Estado, { name: 'estado' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.estadoService.findOne({id});
    }


}