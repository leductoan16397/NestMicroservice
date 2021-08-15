import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class Location {
  @ApiProperty({
    example: '',
    description: 'City',
  })
  @IsString()
  city: string;

  @ApiProperty({
    example: '',
    description: 'district',
  })
  @IsString()
  district: string;

  @ApiProperty({
    example: '',
    description: 'ward',
  })
  @IsString()
  ward: string;

  @ApiProperty({
    example: '',
    description: 'address',
  })
  @IsString()
  address: string;
}
