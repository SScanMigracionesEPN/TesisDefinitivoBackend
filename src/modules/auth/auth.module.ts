import { Global, Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { UserResolver } from './resolvers/user/user.resolver';

import { PrismaService } from 'src/prisma.service';
import { PubSub } from 'graphql-subscriptions';

@Global()
@Module({
  providers: [PrismaService, PubSub, UserService, UserResolver],
})
export class AuthModule {}
