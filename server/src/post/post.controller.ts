import { Post as PostMo } from '@libs/db/models/post.model'
import { Body, Delete, Param, Put, Query } from '@nestjs/common'
import { Post } from '@nestjs/common'
import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger'
import { PostService } from './post.service'

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
    name: 'page',
    description: '页码',
  })
  @ApiQuery({
    name: 'title',
    description: '页面数量',
  })
  @Get()
  async getPosts(@Query() { title, page, size }) {
    // 获取所有帖子
    try {
      const data = await this.postService.getAllPosts(title, page, size)
      return {
        state: 200,
        message: '成功！',
        data,
      }
    } catch (error) {
      console.log('查询帖子co错误！', error)
    }
  }

  @Post()
  @ApiOperation({ summary: '添加帖子' })
  async addPost(@Body() post: PostMo) {
    const res = await this.postService.addPost(post)
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
  @ApiOperation({ summary: '修改帖子' })
  updPost(@Body() post: PostMo) {
    this.postService.updPost(post._id, post)
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
  @ApiOperation({ summary: '删除帖子' })
  delPost(@Param('id') id: string) {
    this.postService.delPost(id)
    return {
      state: 200,
      message: '删除成功',
    }
  }
}
