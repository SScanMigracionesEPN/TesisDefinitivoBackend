import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Actor, Prisma } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';


///https://docs.nestjs.com/recipes/prisma#use-prisma-client-in-your-nestjs-services

const pubSub = new PubSub();

@Injectable()
export class ActorService {

    constructor(@Inject(PrismaService) private prisma: PrismaService) { 
        
    }
 
    suscription(){
      return pubSub.asyncIterator('actor');
    }


    async findOne(
      actorWhereUniqueInput: Prisma.ActorWhereUniqueInput,
    ): Promise<Actor | null> {
      return this.prisma.actor.findUnique({
        where: actorWhereUniqueInput,
      });
    }
  
    async findAll(params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.ActorWhereUniqueInput;
      where?: Prisma.ActorWhereInput;
      orderBy?: Prisma.ActorOrderByWithRelationInput;
    }): Promise<Actor[]> {
      const { skip, take, cursor, where, orderBy } = params;
      return this.prisma.actor.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    }
  
    async create(data: Prisma.ActorCreateInput): Promise<Actor> {
      const newActor= this.prisma.actor.create({
        data,
      });

      pubSub.publish('actor', { actor: newActor });
      return newActor
    }
  

    async update(params: {
      where: Prisma.ActorWhereUniqueInput;
      data: Prisma.ActorUpdateInput;
    }): Promise<Actor> {
      const { where, data } = params;
      return this.prisma.actor.update({
        data,
        where,
      });
    }
  
    async delete(where: Prisma.ActorWhereUniqueInput): Promise<Actor> {
      return this.prisma.actor.delete({
        where,
      });
    }
}
