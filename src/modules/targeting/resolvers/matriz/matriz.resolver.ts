import { Inject } from '@nestjs/common';
import {
  Args,
  Context,
  Int,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { MatrizService } from '../../services/matriz/matriz.service';
import { CreateMatriz } from '../../dtos/matrices/create-matriz.dto';
import { UniqueMatriz } from '../../dtos/matrices/unique-matriz.dto';
import { Matriz } from '../../entities/matriz.entity';

@Resolver()
export class MatrizResolver {
  constructor(@Inject(MatrizService) private matrizService: MatrizService) {}

  @Mutation((returns) => Matriz)
  // async createMatriz(
  //     @Args("data") data: CreateMatriz,
  //     @Context() ctx
  // ): Promise<Matriz> {
  //     return this.matrizService.create(data)

  // }
  @Query((returns) => [Matriz], { nullable: true })
  async allMatrizs(@Context() ctx) {
    return this.matrizService.findAll({});
  }

  // @Mutation(() => Matriz)
  // updateMatriz(@Args('updateMatrizInput') updateMatrizInput: UniqueMatriz) {
  //     return this.matrizService.update({ where: { id: updateMatrizInput.id }, data: updateMatrizInput });
  // }

  @Mutation(() => Matriz)
  removeMatriz(@Args('id', { type: () => Int }) id: number) {
    return this.matrizService.delete({ id });
  }

  @Subscription((returns) => Matriz, { name: 'matriz' })
  newMatriz() {
    return this.matrizService.suscription();
  }
  @Query(() => Matriz, { name: 'matriz' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.matrizService.findOne({ id });
  }
}
