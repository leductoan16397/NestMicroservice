import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @MessagePattern({ service: 'Review', action: 'findAll' })
  findAll(@Payload() data: any) {
    return this.reviewService.findAll();
  }

  @MessagePattern({ service: 'Review', action: 'create' })
  create(@Payload() data: any) {
    return this.reviewService.create(data);
  }

  @MessagePattern({ service: 'Review', action: 'findById' })
  findCompanyById(@Payload() id: any) {
    return this.reviewService.findById(id);
  }

  @MessagePattern({ service: 'Review', action: 'update' })
  updateCompanyById(@Payload() data: any) {
    const { id, input } = data;
    return this.reviewService.updateById(id, input);
  }

  @MessagePattern({ service: 'Review', action: 'deleteById' })
  deleteCompanyById(@Payload() id: any) {
    return this.reviewService.deleteById(id);
  }
}
