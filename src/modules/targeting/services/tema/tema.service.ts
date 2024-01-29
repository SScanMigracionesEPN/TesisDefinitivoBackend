
import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Tema, Prisma } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';


///https://docs.nestjs.com/recipes/prisma#use-prisma-client-in-your-nestjs-services

const pubSub = new PubSub();

@Injectable()
export class TemaService {

    constructor(@Inject(PrismaService) private prisma: PrismaService) { 
        
    }
 
    suscription(){
      return pubSub.asyncIterator('tema');
    }


    async findOne(
      temaWhereUniqueInput: Prisma.TemaWhereUniqueInput,
    ): Promise<Tema | null> {
      return this.prisma.tema.findUnique({
        where: temaWhereUniqueInput,
      });
    }
  
    async findAll(params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.TemaWhereUniqueInput;
      where?: Prisma.TemaWhereInput;
      orderBy?: Prisma.TemaOrderByWithRelationInput;
    }): Promise<Tema[]> {
      const { skip, take, cursor, where, orderBy } = params;
      return this.prisma.tema.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    }
  
    async create(data: Prisma.TemaCreateInput): Promise<Tema> {
      const newTema= this.prisma.tema.create({
        data,
      });

      pubSub.publish('tema', { tema: newTema });
      return newTema
    }
  

    async update(params: {
      where: Prisma.TemaWhereUniqueInput;
      data: Prisma.TemaUpdateInput;
    }): Promise<Tema> {
      const { where, data } = params;
      return this.prisma.tema.update({
        data,
        where,
      });
    }
  
    async delete(where: Prisma.TemaWhereUniqueInput): Promise<Tema> {
      return this.prisma.tema.delete({
        where,
      });
    }
}