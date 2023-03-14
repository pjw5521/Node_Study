import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';

@Injectable()
export class GetrepoService {

    private readonly octokit: Octokit;
    dict = {};

    constructor() {
        this.octokit = new Octokit();
    }

    async getRepositories(id: string): Promise<any> {
        const res = await this.octokit.request('GET /users/{id}/repos', {
            id: id,
            headers: {
                'X-GiHub-Api-Version': '2022-11-28'
            }
        });
        
        for (var i = 0; i < res.data.length; i++){
            const lan = await this.octokit.request('GET {url}', {
                url: res.data[i].languages_url,
                headers: {
                    'X-GiHub-Api-Version': '2022-11-28'
                }
            });
            
            console.log(lan.data);
            for (var key in lan.data) {
                if (key in this.dict) {
                    this.dict[key] += lan.data[key];
                } else {
                    this.dict[key] = lan.data[key];
                }
            }
        }
        
        var sortable = [];
        for (var name in this.dict) {
            sortable.push([name, this.dict[name]]);
        }

        sortable.sort(function (a, b) {
            return b[1] - a[1];
        });

        return `${id} 님이 가장 많이 사용한 언어는 ${sortable[0].key} 입니다.`
    }
}
