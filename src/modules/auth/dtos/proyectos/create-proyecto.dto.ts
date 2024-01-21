import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateProyecto{
    
   

    @Field({nullable:true})
    name: string;

    @Field({ nullable: true })
    description: string;

}

/// sin id en create

