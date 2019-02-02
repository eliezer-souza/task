import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvironmentModule } from '../environment/environment.module';
import { EnvironmentService } from '../environment/environment.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [EnvironmentModule],
      useFactory: async (environmentService: EnvironmentService) => ({
        uri: environmentService.get('DATABASE_URL'),
        useNewUrlParser: true,
        useCreateIndex: true,
      }),
      inject: [EnvironmentService],
    }),
  ],
})
export class DatabaseModule {}
