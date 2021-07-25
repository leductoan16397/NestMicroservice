import { Module, OnModuleInit } from '@nestjs/common';
import { AddController } from './add.controllers';

@Module({
  controllers: [AddController],
})
export class AddModule implements OnModuleInit {
  onModuleInit() {
    console.log(`UserModule has been initialized.`);
  }
}
