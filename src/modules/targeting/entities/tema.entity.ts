import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tema {
  @Field(() => Int)
  id: number;
  @Field(() => String, { nullable: true })
  name: string;
}
