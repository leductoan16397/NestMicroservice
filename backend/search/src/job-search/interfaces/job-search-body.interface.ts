import { Location } from 'common/interface';
import { ElasticsearchBody } from 'search/interfaces/search.service.interface';

interface Salary {
  min: number;
  max: number;
}
export interface JobSearchBody extends ElasticsearchBody {
  id: string;
  jobName: string;
  locations: Location[];
  salary: Salary;
  title: string[];
  skill: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}
