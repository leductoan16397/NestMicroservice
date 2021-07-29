import { Controller, Post, Delete } from '@nestjs/common';

@Controller('')
export class JobController {
  @Post()
  addJob(): any {
    return 'add job';
  }

  @Delete(':id')
  deleteJob(): any {
    return 'delete job';
  }
}
