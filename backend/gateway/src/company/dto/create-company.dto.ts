import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

enum DayOfWeek {
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
}
class WorkTime {
  @ApiProperty({
    example: DayOfWeek.Monday,
    enum: DayOfWeek,
    description: 'start day working',
  })
  @IsString()
  @IsEnum(DayOfWeek)
  from: string;

  @ApiProperty({
    example: DayOfWeek.Friday,
    enum: DayOfWeek,
    description: 'start day working',
  })
  @IsString()
  @IsEnum(DayOfWeek)
  to: string;
}
class CompanySize {
  @ApiProperty({
    example: 1,
    description: 'min size',
  })
  @IsNumber()
  min: number;

  @ApiProperty({
    example: 50,
    description: 'max size',
  })
  @IsNumber()
  max: number;
}

class StartNumber {
  @ApiProperty({
    example: 0,
    description: 'start day working',
  })
  @IsNumber()
  one: number;

  @ApiProperty({
    example: 0,
    description: 'start day working',
  })
  @IsNumber()
  two: number;

  @ApiProperty({
    example: 0,
    description: 'start day working',
  })
  @IsNumber()
  three: number;

  @ApiProperty({
    example: 0,
    description: 'start day working',
  })
  @IsNumber()
  four: number;

  @ApiProperty({
    example: 0,
    description: 'start day working',
  })
  @IsNumber()
  five: number;
}

export class CreateCompanyDto {
  @ApiProperty({
    example: 'vng',
    description: 'company name',
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiPropertyOptional({
    example: 'game',
    description: 'company description',
  })
  @IsString()
  readonly descriptioin: string;

  @ApiPropertyOptional({
    example: 'tp hcm',
    description: 'company location',
  })
  @IsNotEmpty()
  @IsString()
  readonly location: string;

  @ApiPropertyOptional({
    example: 'acacacac',
    description: 'company logo',
  })
  @IsString()
  readonly avater: string;

  @ApiPropertyOptional({
    example: ['vng', 'vaafafs'],
    description: 'company images',
  })
  @IsString({ each: true })
  readonly images: string[];

  @ApiPropertyOptional({
    example: WorkTime,
    description: 'time working',
  })
  @ValidateNested()
  @Type(() => WorkTime)
  readonly workTime: WorkTime;

  @ApiPropertyOptional({
    example: CompanySize,
    description: 'company size',
  })
  @ValidateNested()
  @Type(() => CompanySize)
  readonly companySize: CompanySize;

  @ApiPropertyOptional({
    example: false,
    description: 'OT',
  })
  @IsBoolean()
  readonly ot: boolean;

  @ApiPropertyOptional({
    example: 'Viet Name',
    description: 'OT',
  })
  @IsString()
  readonly originCountry: string;

  @ApiPropertyOptional({
    example: 0,
    description: 'total review',
  })
  @IsNumber()
  readonly totalReview: number;

  @ApiPropertyOptional({
    example: StartNumber,
    description: 'time working',
  })
  @ValidateNested()
  @Type(() => StartNumber)
  readonly overallStart: StartNumber;

  @ApiPropertyOptional({
    example: StartNumber,
    description: 'time working',
  })
  @ValidateNested()
  @Type(() => StartNumber)
  readonly salary: StartNumber;

  @ApiPropertyOptional({
    example: StartNumber,
    description: 'time working',
  })
  @ValidateNested()
  @Type(() => StartNumber)
  readonly training: StartNumber;

  @ApiPropertyOptional({
    example: StartNumber,
    description: 'time working',
  })
  @ValidateNested()
  @Type(() => StartNumber)
  readonly managermentCare: StartNumber;

  @ApiPropertyOptional({
    example: StartNumber,
    description: 'time working',
  })
  @ValidateNested()
  @Type(() => StartNumber)
  readonly culture: StartNumber;

  @ApiPropertyOptional({
    example: StartNumber,
    description: 'time working',
  })
  @ValidateNested()
  @Type(() => StartNumber)
  readonly office: StartNumber;
}
