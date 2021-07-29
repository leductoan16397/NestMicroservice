import { Controller, Delete, Post } from '@nestjs/common';

@Controller('')
export class ReviewController {
  @Post()
  addReview(): any {
    return 'add review';
  }
  @Delete(':id')
  deleteReview(): any {
    return 'add review';
  }
}
