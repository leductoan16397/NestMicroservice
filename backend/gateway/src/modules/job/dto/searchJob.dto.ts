import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  Min,
  IsNotEmpty,
} from 'class-validator';

export class SearchJobDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  readonly page: number;

  @IsOptional()
  @IsString()
  readonly jobTitle: string;

  @IsOptional()
  @IsString()
  readonly city: string;
}
