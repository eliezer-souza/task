import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from 'config/config.module';

@Module({
  imports: [ConfigModule, UserModule],
})
export class AppModule {}
