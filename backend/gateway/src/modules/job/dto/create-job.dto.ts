import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsString,
  IsDateString,
  IsMongoId,
  IsNumber,
  ValidateNested,
  Min,
  IsInt,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

class Salary {
  @ApiProperty({
    example: 1,
    description: 'min salary',
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @IsInt()
  min: number;

  @ApiProperty({
    example: 500,
    description: 'max salary',
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @IsInt()
  max: number;
}

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
    example: `Under 2 years of experience:
    +  Experience in at least 1 programming language

    +  Knowledge about HTML/CSS/JavaScript and familiar framework such as bootstrap and jQuery

From 2 years of experience: all of these requirements must be met:
    +  Experience in at least 2 programming languages 

    +  Experience in IT field in 2 latest working years 

    +  From 3 years of experience:

        ++ Master of using HTML/CSS/JavaScript and familiar framework such as bootstrap and jQuery

        ++ Experience in cloud service (AWS/GCP/MS Azure…)

        ++ Experience in setting up CI/CD

General requirements:
    +  Flexibility in using any programming languages

    +  Knowledge about web application development 

    +  Knowledge about API: SOAP API, REST API

    +  Familiarity with Linux or Windows development environment 

    +  Ability to read and write specification in English 

    +  Age: up to 27

`,
    description: 'should you join with us',
  })
  @IsNotEmpty()
  @IsString()
  readonly skill: string;

  @ApiPropertyOptional({
    example: 'Design system',
    description: 'JD',
  })
  @IsString()
  readonly jobDescription: string;

  @ApiPropertyOptional({
    example: Salary,
    description: 'company size',
  })
  @ValidateNested()
  @Type(() => Salary)
  readonly companySize: Salary;

  @ApiPropertyOptional({
    example: ['60d60362495f1c00ef75d8cc', '60d5f9aa9fcc9f003d429773'],
    description: 'users applied',
  })
  @IsMongoId({ each: true })
  @MinLength(24, { each: true })
  readonly apply: string[];

  @ApiPropertyOptional({
    example: '60dad5c2f3798301c8637285',
    description: 'company',
  })
  @IsNotEmpty()
  @IsMongoId()
  readonly company: string;

  @ApiPropertyOptional({
    example: '60d60362495f1c00ef75d8cc',
    description: 'author',
  })
  @IsNotEmpty()
  @IsMongoId()
  readonly author: string;
}
