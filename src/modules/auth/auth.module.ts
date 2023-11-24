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

@Global()
@Module({
  providers: [ PrismaService,UserService, UserResolver,TemaService, TemaResolver,CeldaService, CeldaResolver]
})
export class AuthModule {}
