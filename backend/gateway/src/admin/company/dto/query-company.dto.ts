import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class QueryCompayNameDto {
  @ApiPropertyOptional({
    example: 'fpt',
    description: 'company name using to search',
  })
  @IsString()
  companyName: string;
}
