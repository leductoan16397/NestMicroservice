import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { MessagePatternInterface } from 'interface/messageParten.interface';
import { SERVICE } from 'interface/service.enum';
import { Observable } from 'rxjs';
import { CreateReviewDto } from './dto/create-review.dto';

@ApiTags('Review')
@Controller('review')
export class ReviewController {
  constructor(@Inject('REVIEW_SERVICE') private ReviewService: ClientProxy) {}

  @Get()
  getHello(): Observable<string> {
    const pattern = { cmd: 'hello' };
    const payload = 'company';
    return this.ReviewService.send<string>(pattern, payload);
  }

  @Get('findall')
  findAll() {
    const message: MessagePatternInterface = {
      service: SERVICE.REVIEW,
      action: 'findAll',
    };
    return this.ReviewService.send(message, {});
  }

  @Post()
  create(@Body() data: CreateReviewDto) {
    const message: MessagePatternInterface = {
      service: SERVICE.REVIEW,
      action: 'create',
    };
    return this.ReviewService.send(message, data);
  }
}
