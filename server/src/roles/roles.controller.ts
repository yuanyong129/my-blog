import { Role } from '@libs/db/models/role.model'
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { RolesService } from './roles.service'

@ApiTags('角色')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}
  @ApiOperation({ summary: '查询所有角色' })
  @Get()
  async getRoles() {
    return {
      state: 200,
      data: await this.rolesService.getRoles(),
    }
  }

  @ApiOperation({ summary: '添加角色' })
  @Post()
  async addRoles(@Body() role: Role) {
    await this.rolesService.addRole(role)
    return {
      state: 200,
      message: '成功',
    }
  }

  @ApiOperation({ summary: '修改角色' })
  @Put()
  async updRoles(@Body() role: Role) {
    await this.rolesService.updRole(role._id, role)
  }

  @ApiParam({
    description: '角色id',
    name: 'id',
  })
  @ApiOperation({ summary: '删除角色' })
  @Delete(':id')
  async delRoles(@Param('id') id: string) {
    await this.rolesService.delRole(id)
  }
}
