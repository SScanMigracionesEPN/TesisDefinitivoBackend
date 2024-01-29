import { Global, Module } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { PrismaService } from 'src/prisma.service';
import { UserService } from '../auth/services/user/user.service';
import { ActorResolver } from './resolvers/actor/actor.resolver';
import { CeldaResolver } from './resolvers/celda/celda.resolver';
import { EstadoResolver } from './resolvers/estado/estado.resolver';
import { MatrizResolver } from './resolvers/matriz/matriz.resolver';
import { ProyectoResolver } from './resolvers/proyecto/proyecto.resolver';
import { TemaResolver } from './resolvers/tema/tema.resolver';
import { ActorService } from './services/actor/actor.service';
import { CeldaService } from './services/celda/celda.service';
import { EstadoService } from './services/estado/estado.service';
import { MatrizService } from './services/matriz/matriz.service';
import { ProyectoService } from './services/proyecto/proyecto.service';
import { TemaService } from './services/tema/tema.service';

@Global()
@Module({
  providers: [
    PrismaService,
    PubSub,
    UserService,
    TemaService,
    CeldaService,
    ActorService,
    EstadoService,
    TemaResolver,
    CeldaResolver,
    ActorResolver,
    EstadoResolver,
    ProyectoService,
    ProyectoResolver,
    MatrizService,
    MatrizResolver,
  ],
})
export class TargetingModule {}
