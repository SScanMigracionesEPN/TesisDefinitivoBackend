import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UniqueActor {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field()
  prioridad: number;

  @Field({ nullable: true })
  coments?: string;

  @Field()
  parent: boolean;
}
