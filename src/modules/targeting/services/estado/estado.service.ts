import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Estado, Prisma } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';

///https://docs.nestjs.com/recipes/prisma#use-prisma-client-in-your-nestjs-services

const pubSub = new PubSub();

@Injectable()
export class EstadoService {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  suscription() {
    return pubSub.asyncIterator('estado');
  }

  async findOne(
    estadoWhereUniqueInput: Prisma.EstadoWhereUniqueInput,
  ): Promise<Estado | null> {
    return this.prisma.estado.findUnique({
      where: estadoWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EstadoWhereUniqueInput;
    where?: Prisma.EstadoWhereInput;
    orderBy?: Prisma.EstadoOrderByWithRelationInput;
  }): Promise<Estado[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.estado.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.EstadoCreateInput): Promise<Estado> {
    const newEstado = this.prisma.estado.create({
      data,
    });

    pubSub.publish('estado', { estado: newEstado });
    return newEstado;
  }

  async update(params: {
    where: Prisma.EstadoWhereUniqueInput;
    data: Prisma.EstadoUpdateInput;
  }): Promise<Estado> {
    const { where, data } = params;
    return this.prisma.estado.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.EstadoWhereUniqueInput): Promise<Estado> {
    return this.prisma.estado.delete({
      where,
    });
  }
}
