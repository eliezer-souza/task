import { Module } from '@nestjs/common';
import { EnvironmentService } from './environment.service';

@Module({
  providers: [
    {
      provide: EnvironmentService,
      useValue: new EnvironmentService(
        `.env.${process.env.NODE_ENV || `development`}`,
      ),
    },
  ],
  exports: [EnvironmentService],
})
export class EnvironmentModule {}
