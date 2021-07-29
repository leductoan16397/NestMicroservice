import { Module, OnModuleInit } from '@nestjs/common';
import { ReviewController } from './review.controllers';

@Module({
  controllers: [ReviewController],
})
export class ReviewModule implements OnModuleInit {
  onModuleInit() {
    console.log(`Admin ReviewModule has been initialized.`);
  }
}
