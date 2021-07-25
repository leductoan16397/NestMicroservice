import { Module, OnModuleInit } from '@nestjs/common';
import { MemeController } from './meme.controllers';

@Module({
  controllers: [MemeController],
})
export class MemeModule implements OnModuleInit {
  onModuleInit() {
    console.log(`UserModule has been initialized.`);
  }
}
