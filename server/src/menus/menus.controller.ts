import { Menu } from '@libs/db/models/menu.model'
import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common'
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { MenusService } from './menus.service'

@ApiTags('菜单')
@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}
  @ApiOperation({ summary: '获取所有菜单' })
  @Get()
  async getMenu() {
    return {
      state: 200,
      data: await this.menusService.getMenu(),
    }
  }
  @ApiOperation({ summary: '添加菜单' })
  @Post()
  async addMenu(@Body() menu: Menu) {
    await this.menusService.addMenu(menu)
    return '成功'
  }
  @ApiOperation({ summary: '修改菜单' })
  @Put()
  async updMenu(@Body() menu: Menu) {
    await this.menusService.updMenu(menu._id, menu)
    return '成功'
  }
  @ApiOperation({ summary: '删除菜单' })
  @Delete(':id')
  @ApiParam({
    description: '菜单id',
    name: 'id',
  })
  async delMenu(@Param('id') id: string) {
    await this.menusService.delMenu(id)
  }
}
