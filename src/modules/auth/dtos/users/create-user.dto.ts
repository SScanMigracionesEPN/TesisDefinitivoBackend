
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUser{
    
    @Field({nullable:true})
    name: string;
}