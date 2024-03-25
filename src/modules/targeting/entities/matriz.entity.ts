import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '@prisma/client';

@ObjectType()
export class Matriz {
  @Field(() => Int)
  id: number;

  @Field(() => Date, {
    name: 'createdAt',
  })
  createdAt: Date;

  @Field(() => Date, {
    name: 'updatedAt',
  })
  updatedAt: Date;

  @Field(() => Int)
  userId: number;
}

///es lo que falta
//name, parent

// prioridad Int
// tiempo    Int
// coment    String
