import { Field, InputType } from "@nestjs/graphql";
import { User, Actor, Tema, Celda } from "@prisma/client";

@InputType()
export class CreateMatriz{
    
    @Field()
    user   :   User  
    @Field()   
    actores  : Actor[]
    @Field()
    temas   :  Tema[]
    @Field()
    celdas  :  Celda[]

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