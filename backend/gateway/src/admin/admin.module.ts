import { Module, OnModuleInit } from '@nestjs/common';
import { AddModule } from './add/add.module';
import { AdminController } from './admin.controllers';
import { MemeModule } from './meme/meme.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    // RouterModule.forRoutes([
    //   {
    //     path: '/admin',
    //     children: [
    //       {
    //         path: '/add',
    //         module: AddModule,
    //       },
    //       {
    //         path: '/meme',
    //         module: MemeModule,
    //       },
    //     ],
    //   },
    // ]),
    AddModule,
    MemeModule,
    RouterModule.register([
      {
        path: 'admin',
        children: [
          {
            path: 'add',
            module: AddModule,
          },
          {
            path: 'meme',
            module: MemeModule,
          },
        ],
      },
    ]),
  ],
  controllers: [AdminController],
})
export class AdminModule implements OnModuleInit {
  onModuleInit() {
    console.log(`AdminModule has been initialized.`);
  }
}
