import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateEstado{
    

    @Field({nullable:true})  //cuando es obligatoria no va nada
    id: number;
    
    @Field({nullable:true})
    NumActor: number; 
    @Field({nullable:true})
    NumTemas: number;
}
