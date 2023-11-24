
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Actor {

    @Field(() => Int)
    id: number;
    @Field(() => String, { nullable: true })
    name: string | null;

    @Field()
    prioridad: number;
    @Field()
    tiempo:    number;
    @Field()
    coment?:   string;
    
    @Field()
    actorId:   number;
    @Field()
    matrizId?:  number;

}


