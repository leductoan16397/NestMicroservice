import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { MessagePatternInterface } from 'interface/messageParten.interface';
import { SERVICE } from 'interface/service.enum';
import { Observable } from 'rxjs';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@ApiTags('Review')
@Controller('review')
export class ReviewController {
  constructor(@Inject('REVIEW_SERVICE') private ReviewService: ClientProxy) {}

  @Get()
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

  @Get(':id')
  findById(@Param('id') id: string) {
    const message: MessagePatternInterface = {
      service: SERVICE.REVIEW,
      action: 'findById',
    };
    return this.ReviewService.send(message, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() input: UpdateReviewDto) {
    const message: MessagePatternInterface = {
      service: SERVICE.REVIEW,
      action: 'update',
    };
    return this.ReviewService.send(message, { id, input });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const message: MessagePatternInterface = {
      service: SERVICE.REVIEW,
      action: 'deleteById',
    };
    return this.ReviewService.send(message, id);
  }
}
