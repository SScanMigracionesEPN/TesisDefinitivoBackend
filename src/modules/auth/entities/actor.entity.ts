import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Actor {
  @Field(() => Int)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => String)
  name: string | null;

  @Field()
  prioridad: number;
  
  @Field()
  coments?: string;

  @Field()
  parent: boolean;

}
