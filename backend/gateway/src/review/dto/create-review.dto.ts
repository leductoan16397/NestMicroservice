import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateReviewDto {
  @ApiPropertyOptional({
    example: ' mot ha',
    description: 'review title',
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiPropertyOptional({
    example: false,
    description: 'OT',
  })
  @IsBoolean()
  readonly ot: boolean;

  @ApiPropertyOptional({
    example: ' mot ha',
    description: 'what like in that company',
  })
  @IsNotEmpty()
  @IsString()
  readonly like: string;

  @ApiPropertyOptional({
    example: ' mot ha',
    description: 'what need improve in that company',
  })
  @IsNotEmpty()
  @IsString()
  readonly improve: string;

  @ApiPropertyOptional({
    example: 0,
    description: 'start',
  })
  @IsNumber()
  readonly overallStart: number;

  @ApiPropertyOptional({
    example: 0,
    description: 'start',
  })
  @IsNumber()
  readonly salaryStart: number;

  @ApiPropertyOptional({
    example: 0,
    description: 'start',
  })
  @IsNumber()
  readonly trainingStart: number;

  @ApiPropertyOptional({
    example: 0,
    description: 'start',
  })
  @IsNumber()
  readonly managermentCareStart: number;

  @ApiPropertyOptional({
    example: 0,
    description: 'start',
  })
  @IsNumber()
  readonly cultureAndFunStart: number;

  @ApiPropertyOptional({
    example: 0,
    description: 'start',
  })
  @IsNumber()
  readonly officeStart: number;

  @ApiPropertyOptional({
    example: false,
    description: 'recommented',
  })
  @IsBoolean()
  readonly recommented: boolean;

  @ApiPropertyOptional({
    example: '60d5f9aa9fcc9f003d429773',
    description: 'user',
  })
  @IsNotEmpty()
  @IsMongoId()
  readonly author: string;

  @ApiPropertyOptional({
    example: '60dad5c2f3798301c8637285',
    description: 'user',
  })
  @IsNotEmpty()
  @IsMongoId()
  readonly company: string;
}
