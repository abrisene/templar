import { Module, DynamicModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { GraphQLModule } from '@nestjs/graphql';

const configGraphQL = () => {
  return GraphQLModule.forRoot({
    debug: false,
    playground: true,
    autoSchemaFile: 'schema.gql',
  });
};

@Module({
  imports: [ConfigModule, AuthModule, configGraphQL()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
