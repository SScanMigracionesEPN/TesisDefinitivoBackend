import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UniqueUser {
  @Field({ nullable: true })
  id: number;
  @Field({ nullable: true })
  name: string;
}
