import { Module } from '@nestjs/common';
import { GetrepoController } from './getrepo.controller';
import { GetrepoService } from './getrepo.service';

@Module({
  controllers: [GetrepoController],
  providers: [GetrepoService]
})
export class GetrepoModule {}
