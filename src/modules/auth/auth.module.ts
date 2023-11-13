import { Global, Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';

import { UserResolver } from './resolvers/user/user.resolver';
import { PrismaService } from 'src/prisma.service';

@Global()
@Module({
  providers: [ PrismaService,UserService, UserResolver]
})
export class AuthModule {}
