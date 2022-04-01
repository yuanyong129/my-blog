import { Controller, Delete, Get, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { NovelsService } from './novels.service'

@ApiTags('小说管理')
@Controller('novels')
export class NovelsController {
  constructor(private readonly novelsService: NovelsService) {}
  @Get()
  // 获取小说
  async getNovels() {
    return []
  }

  @Post()
  // 添加小说
  async addNovel() {
    return {}
  }

  @Put()
  // 修改小说
  async updNovel() {
    return {}
  }

  @Delete()
  // 删除小说
  async delNovel() {
    return {}
  }

  @Get()
  // 获取章节
  async getChapters() {
    return {}
  }

  @Post()
  // 添加章节
  async addChapter() {
    return {}
  }

  @Put()
  // 修改章节
  async updChapter() {
    return {}
  }

  @Delete()
  // 删除章节
  async delChapter() {
    return {}
  }
}
