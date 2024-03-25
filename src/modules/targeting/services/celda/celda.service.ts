import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Celda, Prisma } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';

///https://docs.nestjs.com/recipes/prisma#use-prisma-client-in-your-nestjs-services

const pubSub = new PubSub();

@Injectable()
export class CeldaService {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  suscription() {
    return pubSub.asyncIterator('celda');
  }

  async findOne(
    celdaWhereUniqueInput: Prisma.CeldaWhereUniqueInput,
  ): Promise<Celda | null> {
    return this.prisma.celda.findUnique({
      where: celdaWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CeldaWhereUniqueInput;
    where?: Prisma.CeldaWhereInput;
    orderBy?: Prisma.CeldaOrderByWithRelationInput;
  }): Promise<Celda[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.celda.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.CeldaCreateInput): Promise<Celda> {
    const newCelda = this.prisma.celda.create({
      data,
    });

    pubSub.publish('celda', { celda: newCelda });
    return newCelda;
  }

  async update(params: {
    where: Prisma.CeldaWhereUniqueInput;
    data: Prisma.CeldaUpdateInput;
  }): Promise<Celda> {
    const { where, data } = params;
    return this.prisma.celda.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.CeldaWhereUniqueInput): Promise<Celda> {
    return this.prisma.celda.delete({
      where,
    });
  }
}
