import { Controller, Get, Query } from '@nestjs/common';
import { GetrepoService } from './getrepo.service';

@Controller('getrepo')
export class GetrepoController {
    constructor(private readonly getRepoService: GetrepoService) { }
    
    @Get()
    async getRepositories(@Query('id') id: string) {
        return this.getRepoService.getRepositories(id);
    }
}
