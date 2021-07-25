import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class JobSearchDto {
  @ApiPropertyOptional({
    example: 'nodejs',
    description: ' text search',
  })
  @IsNotEmpty()
  @IsString()
  readonly text: string;
}
