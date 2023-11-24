import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateCelda{
    
    
    @Field({nullable:true})  //cuando es obligatoria no va nada
    id: number;
    
    @Field({nullable:true})
    createdAt: Date;

    @Field({nullable:true})
    updatedAt: Date;

    @Field({nullable:true})
    prioridad: number;

    @Field({nullable:true})
    tiempo: number;

    @Field({nullable:true})
    coment: string;

}


// model Celda {
//     id        Int      @id @default(autoincrement())
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//     prioridad Int
//     tiempo    Int
//     coment    String
//     Actor     Actor?   @relation(fields: [actorId], references: [id], onDelete: Cascade)
//     actorId   Int?
//     Tema      Tema?    @relation(fields: [temaId], references: [id], onDelete: Cascade)
//     temaId    Int?

//   }
