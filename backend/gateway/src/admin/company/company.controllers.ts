import {
  Controller,
  Post,
  Delete,
  UseGuards,
  Get,
  HttpCode,
  HttpStatus,
  Body,
  Param,
  Inject,
  Put,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
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
import { MessagePatternInterface } from 'interface/messageParten.interface';
import { SERVICE } from 'interface/service.enum';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@ApiTags('Admin Company')
@Controller('')
@UseGuards(AdminAuthGuard, AdminRolesGuard)
export class CompanyController {
  constructor(@Inject('COMPANY_SERVICE') private CompanyService: ClientProxy) {}

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
  findAll() {
    const message: MessagePatternInterface = {
      service: SERVICE.COMPANY,
      action: 'findAll',
    };
    return this.CompanyService.send(message, {});
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
  create(@Body() data: CreateCompanyDto) {
    const message: MessagePatternInterface = {
      service: SERVICE.COMPANY,
      action: 'create',
    };
    return this.CompanyService.send(message, data);
  }

  @Get(':id')
  @ApiBearerAuth()
  @AdminRoles('user')
  @ApiOperation({ summary: 'A private route for check the auth' })
  @ApiHeader({
    name: 'Bearer',
    description: 'the token we need for auth.',
  })
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({})
  findById(@Param('id') id: string) {
    const message: MessagePatternInterface = {
      service: SERVICE.COMPANY,
      action: 'findById',
    };
    return this.CompanyService.send(message, id);
  }

  @Put(':id')
  @ApiBearerAuth()
  @AdminRoles('admin')
  @ApiOperation({ summary: 'A private route for check the auth' })
  @ApiHeader({
    name: 'Bearer',
    description: 'the token we need for auth.',
  })
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({})
  update(@Param('id') id: string, @Body() input: UpdateCompanyDto) {
    const message: MessagePatternInterface = {
      service: SERVICE.COMPANY,
      action: 'update',
    };
    return this.CompanyService.send(message, { id, input });
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
  delete(@Param('id') id: string) {
    const message: MessagePatternInterface = {
      service: SERVICE.COMPANY,
      action: 'deleteById',
    };
    return this.CompanyService.send(message, id);
  }
}
