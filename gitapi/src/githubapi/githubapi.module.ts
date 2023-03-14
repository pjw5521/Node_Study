import { Module } from '@nestjs/common';
import { GithubapiController } from './githubapi.controller';
import { GithubapiService } from './githubapi.service';

@Module({
  controllers: [GithubapiController],
  providers: [GithubapiService]
})
export class GithubapiModule {}
