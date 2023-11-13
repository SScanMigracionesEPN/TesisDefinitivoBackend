import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';


///https://docs.nestjs.com/recipes/prisma#use-prisma-client-in-your-nestjs-services

const pubSub = new PubSub();

@Injectable()
export class UserService {

    constructor(@Inject(PrismaService) private prisma: PrismaService) { 
        
    }
 
    suscription(){
      return pubSub.asyncIterator('user');
    }


    async findOne(
      userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    ): Promise<User | null> {
      return this.prisma.user.findUnique({
        where: userWhereUniqueInput,
      });
    }
  
    async findAll(params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.UserWhereUniqueInput;
      where?: Prisma.UserWhereInput;
      orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<User[]> {
      const { skip, take, cursor, where, orderBy } = params;
      return this.prisma.user.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    }
  
    async create(data: Prisma.UserCreateInput): Promise<User> {
      const newUser= this.prisma.user.create({
        data,
      });

      pubSub.publish('user', { user: newUser });
      return newUser
    }
  

    async update(params: {
      where: Prisma.UserWhereUniqueInput;
      data: Prisma.UserUpdateInput;
    }): Promise<User> {
      const { where, data } = params;
      return this.prisma.user.update({
        data,
        where,
      });
    }
  
    async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
      return this.prisma.user.delete({
        where,
      });
    }
}
