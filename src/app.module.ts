import { Module } from '@nestjs/common';
import { ConfigModule } from 'config/config.module';
import { RootModule } from './modules/root.module';

@Module({
  imports: [ConfigModule, RootModule],
})
export class AppModule {}
