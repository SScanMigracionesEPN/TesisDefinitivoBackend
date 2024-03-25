import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Celda {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  prioridad: number;

  @Field(() => Int, { nullable: true })
  tiempo: number;

  @Field(() => String, { nullable: true })
  coment: string;
}

///es lo que falta
//name, parent

// prioridad Int
// tiempo    Int
// coment    String
