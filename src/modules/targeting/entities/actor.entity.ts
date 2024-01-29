import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Actor {
  @Field(() => Int)
  id: number;


  @Field(() => String)
  name: string;

  @Field(() => Int)
  prioridad: number;

  // @Field(() => [Actor])
  // hijos: Actor[];

  // @Field(() => Actor)
  // Actor : Actor;

  // @Field(() => Matrix)
  // Matriz : Matrix;

  // @Field(() => Topic)
  // Tema : Topic;

  
  @Field(() => String)
  coments?: string;

  @Field(() => Boolean)
  parent: boolean;

}
