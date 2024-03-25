import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UniqueProyecto {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  description?: string;
}
