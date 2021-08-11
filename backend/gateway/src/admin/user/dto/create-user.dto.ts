import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAdminUserDto {
  // Email
  @ApiPropertyOptional({
    example: 'pejman@gmail.com',
    description: 'The email of the User',
    format: 'email',
    uniqueItems: true,
    minLength: 5,
    maxLength: 255,
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  // Password
  @ApiPropertyOptional({
    example: 'comppany id',
    description: 'comppany id',
  })
  @IsNotEmpty()
  @IsString()
  readonly company: string;
}
