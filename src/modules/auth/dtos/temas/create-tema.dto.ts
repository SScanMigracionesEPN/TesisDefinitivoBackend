import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateTema{
    
    @Field({nullable:true})
    name: string;
}