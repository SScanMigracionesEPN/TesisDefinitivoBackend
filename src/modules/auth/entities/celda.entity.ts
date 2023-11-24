
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Celda {

    @Field(() => Int)
    id: number;

    @Field({nullable:true})
    createdAt: Date;

    @Field({nullable:true})
    updatedAt: Date;

    @Field({nullable:true})
    prioridad: number;

    @Field({nullable:true})
    tiempo: number;

    @Field({nullable:true})
    coment: string;

   


}

///es lo que falta
//name, parent

  // prioridad Int
  // tiempo    Int
  // coment    String