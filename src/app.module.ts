import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';

import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
      subscriptions: {
        'graphql-ws': {
          path: '/graphql',
          onConnect: () => {
            // const { connectionParams, extra } = context;

            console.log('Connecting to GraphQL-WS');
            // extra.loaders = createTaskLoaders(tasksService);
          },
        },

        'subscriptions-transport-ws': {
          path: '/graphql',
          onConnect: (connectionParams) => {
            console.log('Connecting to GraphQL-Subscriptions');
            return {
              // loaders: createTaskLoaders(tasksService),
            };
          },
        },
      },
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
