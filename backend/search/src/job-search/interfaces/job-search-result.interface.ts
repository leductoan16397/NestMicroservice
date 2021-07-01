import { JobSearchBody } from './job-search-body.interface';

export interface JobSearchResult {
  hits: {
    total: number;
    hits: Array<{
      _source: JobSearchBody;
    }>;
  };
}
