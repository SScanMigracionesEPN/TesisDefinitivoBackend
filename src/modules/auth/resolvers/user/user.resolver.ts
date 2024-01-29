import {
  Args,
  Context,
  Mutation,
  Query,
  Resolver,
  Int,
  Subscription,
} from '@nestjs/graphql';
import { UserService } from '../../services/user/user.service';
import { Inject } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { promises } from 'dns';
import { CreateUser } from '../../dtos/users/create-user.dto';
import { UniqueUser } from '../../dtos/users/unique-user.dto';
import { Prisma } from '@prisma/client';

/////

@Resolver()
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Mutation((returns) => User)
  async createUser(
    @Args('data') data: CreateUser,
    @Context() ctx,
  ): Promise<User> {
    return this.userService.create(data);
  }
  @Query((returns) => [User], { nullable: true })
  async allUsers(@Context() ctx) {
    return this.userService.findAll({});
  }

  /////////// editar

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UniqueUser) {
    return this.userService.update({
      where: { id: updateUserInput.id },
      data: updateUserInput,
    });
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.delete({ id });
  }

  @Subscription((returns) => User, { name: 'user' })
  newUser() {
    return this.userService.suscription();
  }
  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne({ id });
  }
  @Query(() => User)
  findByName(@Args('username', { type: () => String }) username: string) {
    const request: Prisma.UserWhereUniqueInput = {
      id: 1,
      name: username,
    };

    return this.userService.findOne(request);
  }
}
