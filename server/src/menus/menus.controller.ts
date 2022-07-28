import { Menu } from '@libs/db/models/menu.model'
import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common'
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { IResponseType } from 'libs/types/global'
import { MenusService } from './menus.service'

@ApiTags('菜单')
@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}
  @ApiOperation({ summary: '获取所有菜单' })
  @Get()
  async getMenu(): Promise<IResponseType<Menu[]>> {
    return {
      code: 200,
      data: await this.menusService.getMenu(),
      msg: '成功',
    }
  }
  @ApiOperation({ summary: '添加菜单' })
  @Post()
  async addMenu(@Body() menu: Menu): Promise<IResponseType<null>> {
    try {
      await this.menusService.addMenu(menu)
      return {
        code: 200,
        data: null,
        msg: '成功',
      }
    } catch (error) {
      return {
        code: 500,
        data: null,
        msg: '服务器端异常',
      }
    }
  }
  @ApiOperation({ summary: '修改菜单' })
  @Put()
  async updMenu(@Body() menu: Menu): Promise<IResponseType<null>> {
    try {
      await this.menusService.updMenu(menu._id, menu)
      return { code: 200, msg: '修改成功！', data: null }
    } catch (error) {
      return { code: 500, msg: '服务端错误！', data: null }
    }
  }
  @ApiOperation({ summary: '删除菜单' })
  @Delete(':id')
  @ApiParam({
    description: '菜单id',
    name: 'id',
  })
  async delMenu(@Param('id') id: string): Promise<IResponseType<null>> {
    try {
      await this.menusService.delMenu(id)
      return { code: 200, msg: '删除成功！', data: null }
    } catch (error) {
      return { code: 500, msg: '服务端错误！', data: null }
    }
  }
}
