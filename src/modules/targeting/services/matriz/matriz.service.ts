import { Inject, Injectable } from '@nestjs/common';
import { Prisma, Matriz } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MatrizService {

    constructor(@Inject(PrismaService) private prisma: PrismaService,
    @Inject(PubSub) private pubSub:PubSub) { 
        
    }
 
    suscription(){
      return this.pubSub.asyncIterator('matriz');
    }


    async findOne(
      matrizWhereUniqueInput: Prisma.MatrizWhereUniqueInput,
    ): Promise<Matriz | null> {
      return this.prisma.matriz.findUnique({
        where: matrizWhereUniqueInput,
      });
    }
  
    async findAll(params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.MatrizWhereUniqueInput;
      where?: Prisma.MatrizWhereInput;
      orderBy?: Prisma.MatrizOrderByWithRelationInput;
    }): Promise<Matriz[]> {
      const { skip, take, cursor, where, orderBy } = params;
      return this.prisma.matriz.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    }
  
    async create(data: Prisma.MatrizCreateInput): Promise<Matriz> {
      const newMatriz= this.prisma.matriz.create({
        data,
      });

      this.pubSub.publish('matriz', { matriz: newMatriz });
      return newMatriz
    }
  

    async update(params: {
      where: Prisma.MatrizWhereUniqueInput;
      data: Prisma.MatrizUpdateInput;
    }): Promise<Matriz> {
      const { where, data } = params;
      return this.prisma.matriz.update({
        data,
        where,
      });
    }
  
    async delete(where: Prisma.MatrizWhereUniqueInput): Promise<Matriz> {
      return this.prisma.matriz.delete({
        where,
      });
    }



}
