import { Post as PostMo } from '@libs/db/models/post.model'
import { Body, Delete, Param, Put, Query } from '@nestjs/common'
import { Post } from '@nestjs/common'
import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger'
import { IResponseType } from 'libs/types/global'
import { PostService } from './post.service'

interface IGetPostResponse {
  list: PostMo[]
  total: number
  totalAll: number
}

@ApiTags('帖子管理')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiQuery({
    name: 'title',
    description: '帖子名称',
    required: false,
  })
  @ApiQuery({
    name: 'type',
    description: '帖子类型',
    required: false,
  })
  @ApiQuery({
    name: 'tag',
    description: '帖子标签',
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
  async getPosts(
    @Query() { title, page, size, type, tag },
  ): Promise<IResponseType<IGetPostResponse | null>> {
    // 获取所有帖子
    try {
      const data = await this.postService.getAllPosts(
        title,
        type,
        tag,
        parseInt(page),
        parseInt(size),
      )
      return { code: 200, msg: '成功！', data }
    } catch (error) {
      console.log('查询帖子co错误！', error)
      return { code: 500, data: null, msg: '服务器端异常！' }
    }
  }

  @Post()
  @ApiOperation({ summary: '添加帖子' })
  async addPost(@Body() post: PostMo): Promise<IResponseType<null>> {
    const res = await this.postService.addPost(post)
    switch (res) {
      case 200:
        return { code: 200, msg: '添加成功', data: null }
      case 501:
        return { code: 501, msg: '添加失败', data: null }
    }
  }

  @Put()
  @ApiOperation({ summary: '修改帖子' })
  updPost(@Body() post: PostMo): IResponseType<null> {
    try {
      this.postService.updPost(post._id, post)
      return { code: 200, msg: '修改成功', data: null }
    } catch (err) {
      return { code: 500, msg: '服务器端异常！', data: null }
    }
  }

  @Delete(':id')
  @ApiParam({
    description: '帖子id',
    name: 'id',
  })
  @ApiOperation({ summary: '根据id查询帖子详情' })
  async getPostById(
    @Param('id') id: string,
  ): Promise<IResponseType<PostMo | null>> {
    try {
      const data = await this.postService.getPostById(id)
      return { code: 200, msg: '查询成功', data }
    } catch (err) {
      console.log('查询帖子失败！', err)
      return { code: 500, msg: '服务器端异常！', data: null }
    }
  }

  @Delete(':id')
  @ApiParam({
    description: '帖子id',
    name: 'id',
  })
  @ApiOperation({ summary: '删除帖子' })
  delPost(@Param('id') id: string): IResponseType<null> {
    try {
      this.postService.delPost(id)
      return { code: 200, msg: '删除成功', data: null }
    } catch (err) {
      console.error('删除帖子失败！===>', err)
      return { code: 500, msg: '服务器端异常！', data: null }
    }
  }
}
