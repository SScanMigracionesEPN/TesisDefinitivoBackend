
import { Args, Context, Mutation, Query, Resolver,Int, Subscription  } from '@nestjs/graphql';
import { TemaService } from '../../services/tema/tema.service';
import { Inject } from '@nestjs/common';
import { Tema } from '../../entities/tema.entity';
import { promises } from 'dns';
import { CreateTema } from '../../dtos/temas/create-tema.dto';
import { UniqueTema } from '../../dtos/temas/unique-tema.dto';


@Resolver()
export class TemaResolver {
    constructor(@Inject(TemaService) private temaService: TemaService) { }


    @Mutation((returns) => Tema)
    async create(
        @Args("data") data: CreateTema,
        @Context() ctx
    ): Promise<Tema> {
        return this.temaService.create(data)

    }
    @Query((returns) => [Tema], { nullable: true })
    async allTemas(@Context() ctx) {
        return this.temaService.findAll({});
    }


    /////////// editar

    @Mutation(() => Tema)
    updateTema(@Args('updateTemaInput') updateTemaInput: UniqueTema) {
        return this.temaService.update({ where: { id: updateTemaInput.id }, data: updateTemaInput });
    }

    @Mutation(() => Tema)
    removeTema(@Args('id', { type: () => Int }) id: number) {
        return this.temaService.delete({id});
    }

    @Subscription((returns) => Tema,{name:'tema'})
    newTema() {
        return this.temaService.suscription();
  }
    @Query(() => Tema, { name: 'tema' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.temaService.findOne({id});
    }


}