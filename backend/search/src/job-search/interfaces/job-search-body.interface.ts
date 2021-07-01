import { ElasticsearchBody } from 'search/interfaces/search.service.interface';

interface Salary {
  min: number;
  max: number;
}
export interface JobSearchBody extends ElasticsearchBody {
  id: string;
  name: string;
  location: string;
  salary: Salary;
  title: string[];
  skill: string;
  avatar: string;
  createdAt: Date;
}
