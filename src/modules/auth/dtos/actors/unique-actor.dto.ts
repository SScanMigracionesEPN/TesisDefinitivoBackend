
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UniqueActor {



    @Field({ nullable: true })
    id: number

    @Field({nullable:true})
    name: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field()
    prioridad: number;

    @Field({ nullable: true })
    coments?: string;

    @Field()
    parent: boolean;

   
    @Field({ nullable: true })
    actorId?: number;


    @Field({ nullable: true })
    matrizId?: number;
}


