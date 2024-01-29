
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { User } from "@prisma/client";

@ObjectType()
export class Matriz {

    @Field(() => Int)
    id: number;

    // @Field(() => Int)
    // User : User

    
   


}

///es lo que falta
//name, parent

  // prioridad Int
  // tiempo    Int
  // coment    String