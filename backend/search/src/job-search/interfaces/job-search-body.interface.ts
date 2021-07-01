import { ElasticsearchBody } from 'search/interfaces/search.service.interface';

export interface JobSearchBody extends ElasticsearchBody {
  id: string;
  name: string;
  location: string;
  title: string[];
  skill: string;
  avatar: string;
  createdAt: Date;
}
