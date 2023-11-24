import { Args, Context, Mutation, Query, Resolver,Int, Subscription  } from '@nestjs/graphql';
import { ActorService } from '../../services/actor/actor.service';
import { Inject } from '@nestjs/common';
import { Actor } from '../../entities/actor.entity';
import { promises } from 'dns';
import { CreateActor } from '../../dtos/actors/create-actor.dto';
import { UniqueActor } from '../../dtos/actors/unique-actor.dto';

/////



@Resolver()
export class ActorResolver {
    constructor(@Inject(ActorService) private actorService: ActorService) { }


    @Mutation((returns) => Actor)
    async create(
        @Args("data") data: CreateActor,
        @Context() ctx
    ): Promise<Actor> {
        return this.actorService.create(data)

    }
    @Query((returns) => [Actor], { nullable: true })
    async allActors(@Context() ctx) {
        return this.actorService.findAll({});
    }


    /////////// editar

    @Mutation(() => Actor)
    updateActor(@Args('updateActorInput') updateActorInput: UniqueActor) {
        return this.actorService.update({ where: { id: updateActorInput.id }, data: updateActorInput });
    }

    @Mutation(() => Actor)
    removeActor(@Args('id', { type: () => Int }) id: number) {
        return this.actorService.delete({id});
    }

    @Subscription((returns) => Actor,{name:'actor'})
    newActor() {
        return this.actorService.suscription();
  }
    @Query(() => Actor, { name: 'actor' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.actorService.findOne({id});
    }


}
