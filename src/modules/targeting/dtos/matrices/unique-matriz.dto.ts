import { Field, InputType } from '@nestjs/graphql';
import { User, Actor, Tema, Celda } from '@prisma/client';

@InputType()
export class UniqueMatriz {
  @Field()
  user: User;
  @Field()
  actores: Actor[];
  @Field()
  temas: Tema[];
  @Field()
  celdas: Celda[];
}
