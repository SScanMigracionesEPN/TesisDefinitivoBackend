import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Proyecto {
  @Field({ nullable: true })
  id: number;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;
}
