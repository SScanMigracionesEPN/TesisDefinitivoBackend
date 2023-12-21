import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateTema{
    
    @Field({nullable:true})
    name: string;

    @Field({nullable:true})
    coments: string;

    @Field({nullable:true})
    prioridad : number;

    @Field({nullable:true})
    parent : boolean;
}