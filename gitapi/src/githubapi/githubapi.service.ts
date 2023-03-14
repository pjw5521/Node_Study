import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';

@Injectable()
export class GithubapiService {

    private readonly octokit: Octokit;

    constructor() {
        this.octokit = new Octokit();
    }

    async getRepositories(id: string, repo: string): Promise<any> {
        const res = await this.octokit.request('GET /repos/{id}/{repo}/languages', {
            id: id,
            repo: repo,
            headers: {
                'X-GiHub-Api-Version': '2022-11-28'
            }
        });

        return res.data;
    }
}
