import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Estado {

    @Field({nullable:true})  //cuando es obligatoria no va nada
    id: number;
    @Field(() => Int)
    NumActor: number; 
    @Field(() => Int)
    NumTemas: number;



}
