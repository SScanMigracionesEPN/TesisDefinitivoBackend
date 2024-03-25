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

  @Field(() => Int, { nullable: true })
  actorId?: number;

  @Field(() => Int, { nullable: true })
  matrizId?: number;

  @Field(() => Int, { nullable: true })
  temaId?: number;

  @Field(() => String)
  coments?: string;

  @Field(() => Boolean)
  parent: boolean;
}
