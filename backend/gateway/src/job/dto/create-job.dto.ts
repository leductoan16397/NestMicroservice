import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsString,
  IsDateString,
  IsMongoId,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateJobDto {
  @ApiPropertyOptional({
    example: 'Backend NodeJs',
    description: 'Position Name',
    minLength: 5,
    maxLength: 255,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  @IsString()
  readonly name: string;

  @ApiPropertyOptional({
    example: 'TPHCM',
    description: 'Job location',
  })
  @IsNotEmpty()
  @IsString()
  readonly location: string;

  @ApiPropertyOptional({
    example: Date.now,
    description: 'end time',
  })
  @IsNotEmpty()
  @IsDateString()
  readonly endTime: Date;

  @ApiPropertyOptional({
    example: ['NodeJs', 'Python'],
    description: 'job title',
  })
  @IsString({ each: true })
  readonly title: string[];

  @ApiPropertyOptional({
    example: 'so much money',
    description: 'should you join with us',
  })
  @IsNotEmpty()
  @IsString()
  readonly reason: string;

  @ApiPropertyOptional({
    example: 'Design system',
    description: 'JD',
  })
  @IsString()
  readonly jobDescription: string;

  @ApiPropertyOptional({
    example: ['60d5f9aa9fcc9f003d429773', '60d5f9aa9fcc9f003d429773'],
    description: 'users applied',
  })
  @IsMongoId({ each: true })
  @MinLength(24, { each: true })
  readonly apply: string[];

  @ApiPropertyOptional({
    example: '60d5f9aa9fcc9f003d429773',
    description: 'company',
  })
  @IsNotEmpty()
  @IsMongoId()
  readonly company: string;

  @ApiPropertyOptional({
    example: '60d5f9aa9fcc9f003d429773',
    description: 'author',
  })
  @IsNotEmpty()
  @IsMongoId()
  readonly author: string;
}
