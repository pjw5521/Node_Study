import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubapiModule } from './githubapi/githubapi.module';
import { GetrepoModule } from './getrepo/getrepo.module';

@Module({
  imports: [GithubapiModule, GetrepoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
