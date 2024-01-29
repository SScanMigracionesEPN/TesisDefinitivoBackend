import { Inject, Injectable } from '@nestjs/common';
import { Prisma, Proyecto } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProyectoService {

    

    constructor(@Inject(PrismaService) private prisma: PrismaService,
    @Inject(PubSub) private pubSub:PubSub) { 
        
    }
 
    suscription(){
      return this.pubSub.asyncIterator('proyecto');
    }


    async findOne(
      proyectoWhereUniqueInput: Prisma.ProyectoWhereUniqueInput,
    ): Promise<Proyecto | null> {
      return this.prisma.proyecto.findUnique({
        where: proyectoWhereUniqueInput,
      });
    }
  
    async findAll(params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.ProyectoWhereUniqueInput;
      where?: Prisma.ProyectoWhereInput;
      orderBy?: Prisma.ProyectoOrderByWithRelationInput;
    }): Promise<Proyecto[]> {
      const { skip, take, cursor, where, orderBy } = params;
      return this.prisma.proyecto.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    }
  
    async create(data: Prisma.ProyectoCreateInput): Promise<Proyecto> {
      const newProyecto= this.prisma.proyecto.create({
        data,
      });

      this.pubSub.publish('proyecto', { proyecto: newProyecto });
      return newProyecto
    }
  

    async update(params: {
      where: Prisma.ProyectoWhereUniqueInput;
      data: Prisma.ProyectoUpdateInput;
    }): Promise<Proyecto> {
      const { where, data } = params;
      return this.prisma.proyecto.update({
        data,
        where,
      });
    }
  
    async delete(where: Prisma.ProyectoWhereUniqueInput): Promise<Proyecto> {
      return this.prisma.proyecto.delete({
        where,
      });
    }







}
