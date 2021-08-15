import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString } from 'class-validator';

export class JobSearchDto {
  @ApiPropertyOptional({
    example: 'nodejs',
    description: ' text search',
  })
  @IsOptional()
  @IsString()
  readonly text: string;

  @ApiPropertyOptional({
    example: 'nodejs',
    description: ' location',
    enum: ['all', 'Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng'],
  })
  @IsOptional()
  @IsString()
  @IsIn(['all', 'Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng'])
  readonly city: string;
}
