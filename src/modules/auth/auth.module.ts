import { Global, Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { UserResolver } from './resolvers/user/user.resolver';

import { ActorService } from './services/actor/actor.service';
import { ActorResolver } from './resolvers/actor/actor.resolver';

import { TemaService } from './services/tema/tema.service';
import { TemaResolver } from './resolvers/tema/tema.resolver';


import { CeldaService } from './services/celda/celda.service';
import { CeldaResolver } from './resolvers/celda/celda.resolver';



import { PrismaService } from 'src/prisma.service';
import { EstadoResolver } from './resolvers/estado/estado.resolver';
import { EstadoService } from './services/estado/estado.service';
import { ProyectoService } from './services/proyecto/proyecto.service';
import { ProyectoResolver } from './resolvers/proyecto/proyecto.resolver';
import { MatrizService } from './services/matriz/matriz.service';
import { MatrizResolver } from './resolvers/matriz/matriz.resolver';

@Global()
@Module({
  providers: [ PrismaService,UserService, 
    TemaService, 
    CeldaService,
    UserService,
    ActorService,
    EstadoService, 
    TemaResolver,
    UserResolver,
    CeldaResolver,
    ActorResolver,
    EstadoResolver,
    ProyectoService,
    ProyectoResolver,
    MatrizService,
    MatrizResolver,
    
  ]
})
export class AuthModule {}
