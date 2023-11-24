import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateActor{
    
    
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



// id        Int      @id @default(autoincrement())
// createdAt DateTime @default(now())
// updatedAt DateTime @updatedAt
// name      String
// prioridad Int
// coments   String?
// parent    Boolean
// hijos     Actor[]  @relation("ActortoActor")
// celdas    Celda[]
// Actor     Actor?   @relation("ActortoActor", fields: [actorId], references: [id], onDelete: Cascade)
// actorId   Int?
// Matriz    Matriz?  @relation(fields: [matrizId], references: [id])
// matrizId  Int?