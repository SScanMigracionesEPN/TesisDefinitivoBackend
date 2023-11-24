import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UniqueCelda{
    
    @Field({nullable:true})
    id: number
    @Field({nullable:true})
    prioridad: number
    @Field({nullable:true})
    tiempo: number
    @Field({nullable:true})
    coment: string
    
}