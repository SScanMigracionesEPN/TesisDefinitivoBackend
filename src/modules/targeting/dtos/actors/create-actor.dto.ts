import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateActor {
  @Field()
  name: string;

  @Field()
  prioridad: number;

  @Field()
  coments?: string;

  @Field(() => Int, { nullable: true })
  actorId?: number;

  @Field(() => Int, { nullable: true })
  matrizId?: number;

  @Field(() => Int, { nullable: true })
  temaId?: number;

  @Field()
  parent: boolean;
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
