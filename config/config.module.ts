import { Module } from '@nestjs/common';
import { EnvironmentModule } from './environment/environment.module';
import { DatabaseModule } from './database/database.module';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [EnvironmentModule, DatabaseModule, GraphqlModule],
})
export class ConfigModule {}
