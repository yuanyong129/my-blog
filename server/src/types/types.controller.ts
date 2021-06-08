import { Type } from '@libs/db/models/type.model'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger'
import { TypesService } from './types.service'

@ApiTags('类型管理')
@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @ApiQuery({
    name: 'title',
    description: '类型名称',
    required: false,
  })
  @ApiQuery({
    name: 'page',
    description: '页码',
  })
  @ApiQuery({
    name: 'size',
    description: '页面数量',
  })
  @Get()
  async getPosts(@Query() { title, page, size }) {
    // 获取所有帖子
    try {
      const data = await this.typesService.getAllTypes(
        title,
        parseInt(page),
        parseInt(size),
      )
      return {
        state: 200,
        message: '成功！',
        data,
      }
    } catch (error) {
      console.log('查询类型co错误！', error)
    }
  }

  @Post()
  @ApiOperation({ summary: '添加类型' })
  async addPost(@Body() type: Type) {
    const res = await this.typesService.addType(type)
    switch (res) {
      case 200:
        return {
          state: 200,
          message: '添加成功',
        }
      case 501:
        return {
          state: 501,
          message: '添加失败',
        }
    }
  }

  @Put()
  @ApiOperation({ summary: '修改类型' })
  updPost(@Body() type: Type) {
    this.typesService.updType(type._id, type)
    return {
      state: 200,
      message: '修改成功',
    }
  }

  @Delete(':id')
  @ApiParam({
    description: '帖子id',
    name: 'id',
  })
  @ApiOperation({ summary: '删除类型' })
  delPost(@Param('id') id: string) {
    this.typesService.delType(id)
    return {
      state: 200,
      message: '删除成功',
    }
  }
}
