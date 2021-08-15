import { Injectable } from '@nestjs/common';
import { JobModel } from 'job/schemas/job.schema';
import { SearchService } from 'search/search.service';
import { JobSearchBody } from './interfaces/job-search-body.interface';

@Injectable()
export class JobSearchService {
  readonly index = 'jobs';

  constructor(private readonly searchService: SearchService) {}

  private convertModelToSearchBodyJob = (job: JobModel): JobSearchBody => {
    return {
      id: job.id,
      jobName: job.jobName,
      salary: job.salary,
      locations: job.locations,
      title: job.title,
      skill: job.skill,
      avatar: job.company.avatar.url,
      createdAt: job.createdAt,
      updatedAt: job.updatedAt,
    };
  };

  insert = async (job: JobModel): Promise<any> => {
    const body: JobSearchBody = this.convertModelToSearchBodyJob(job);
    return await this.searchService.insert(this.index, body);
  };

  getAllFromElastic = async (): Promise<any> => {
    return await this.searchService.getAll(this.index);
  };

  search = async (text = 'a'): Promise<any> => {
    console.log('text: ', text);
    return await this.searchService.search(this.index, text, [
      'jobName',
      'title',
      'skill',
    ]);
  };

  update = async (job: JobModel): Promise<any> => {
    const body: JobSearchBody = this.convertModelToSearchBodyJob(job);
    return await this.searchService.updateById(this.index, body);
  };

  delete = async (id: string): Promise<any> => {
    return await this.searchService.deleteById(this.index, id);
  };

  deleteAll = async (): Promise<any> => {
    return await this.searchService.deleteAll(this.index);
  };
}
