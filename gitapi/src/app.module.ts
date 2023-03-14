import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubapiModule } from './githubapi/githubapi.module';

@Module({
  imports: [GithubapiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
