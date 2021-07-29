import {
  Controller,
  Post,
  Delete,
  UseGuards,
  Get,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AdminRoles } from 'admin/auth/decorators/roles.decorator';
import { AdminAuthGuard } from 'admin/auth/guards/auth.guard';
import { AdminRolesGuard } from 'admin/auth/guards/roles.guard';

@ApiTags('Admin Company')
@Controller('')
@UseGuards(AdminAuthGuard, AdminRolesGuard)
export class CompanyController {
  @Get()
  @ApiBearerAuth()
  @AdminRoles('user')
  @ApiOperation({ summary: 'A private route for check the auth' })
  @ApiHeader({
    name: 'Bearer',
    description: 'the token we need for auth.',
  })
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({})
  getCompany(): any {
    return 'get company';
  }

  @Post()
  @ApiBearerAuth()
  @AdminRoles('admin')
  @ApiOperation({ summary: 'A private route for check the auth' })
  @ApiHeader({
    name: 'Bearer',
    description: 'the token we need for auth.',
  })
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({})
  addCompany(): any {
    return 'add company';
  }

  @Delete(':id')
  @ApiBearerAuth()
  @AdminRoles('admin')
  @ApiOperation({ summary: 'A private route for check the auth' })
  @ApiHeader({
    name: 'Bearer',
    description: 'the token we need for auth.',
  })
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({})
  deleteCompany(): any {
    return 'delete company';
  }
}
