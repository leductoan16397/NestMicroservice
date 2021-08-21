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
      locations: job.locations.map((item) => ({
        address: item.address,
        city: item.city,
        district: item.district,
        ward: item.ward,
      })),
      locationsString: job.locations.map(
        (item) =>
          `${item.address} - ${item.ward} - ${item.district} - ${item.city}`,
      ),
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

  count = async (): Promise<any> => {
    return await this.searchService.count(this.index);
  };

  search = async (
    page = 1,
    jobTitle: string,
    city: string,
    size = 10,
  ): Promise<any> => {
    const searchs = [];
    jobTitle &&
      searchs.push({ text: jobTitle, fields: ['jobName', 'title', 'skill'] });
    city && searchs.push({ text: city, fields: ['locationsString'] });

    if (city) {
      const a = await this.searchService.searchByJobAndCity(
        this.index,
        searchs,
        (page - 1) * size,
      );
      return {
        total: a.total,
        currentPage: page,
        jobs: a.items,
      };
    }
    return {
      total: await this.searchService.count(this.index, searchs),
      currentPage: page,
      jobs: await this.searchService.search(
        this.index,
        searchs,
        (page - 1) * size,
      ),
    };
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
