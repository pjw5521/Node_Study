import { Controller, Get, Query } from '@nestjs/common';
import { GithubapiService } from './githubapi.service';
@Controller('githubapi')
export class GithubapiController {

    constructor(private readonly githubapiService: GithubapiService) { }

    @Get()
    async getRepositories(@Query('id') id: string, @Query('rep') rep: string) {
        return this.githubapiService.getRepositories(id, rep);
    }
}
