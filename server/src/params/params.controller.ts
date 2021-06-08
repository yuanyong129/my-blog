import { Param as ParamMo } from '@libs/db/models/param.model'
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
import { ParamsService } from './params.service'

@ApiTags('参数管理')
@Controller('params')
export class ParamsController {
  constructor(private readonly paramsService: ParamsService) {}

  @ApiQuery({
    name: 'typeId',
    description: '参数id',
  })
  @ApiQuery({
    name: 'title',
    description: '参数名称',
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
  async getPosts(@Query() { typeId, title, page, size }) {
    // 获取所有帖子
    try {
      const data = await this.paramsService.getAllParam(
        typeId,
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
      console.log('查询参数co错误！', error)
    }
  }

  @Post()
  @ApiOperation({ summary: '添加参数' })
  async addPost(@Body() param: ParamMo) {
    const res = await this.paramsService.addParam(param)
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
  @ApiOperation({ summary: '修改参数' })
  updPost(@Body() param: ParamMo) {
    this.paramsService.updParam(param._id, param)
    return {
      state: 200,
      message: '修改成功',
    }
  }

  @Delete(':id')
  @ApiParam({
    description: '参数id',
    name: 'id',
  })
  @ApiOperation({ summary: '删除类型' })
  delPost(@Param('id') id: string) {
    this.paramsService.delParam(id)
    return {
      state: 200,
      message: '删除成功',
    }
  }
}
