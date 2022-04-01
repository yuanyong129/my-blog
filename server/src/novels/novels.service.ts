import { Chapter, Novel } from '@libs/db/models/novel.model'
import { Injectable } from '@nestjs/common'
import { ReturnModelType } from '@typegoose/typegoose'
import { InjectModel } from 'nestjs-typegoose'

@Injectable()
export class NovelsService {
  constructor(
    @InjectModel(Novel)
    private readonly novelModel: ReturnModelType<typeof Novel>,
    @InjectModel(Chapter)
    private readonly chapterModel: ReturnModelType<typeof Chapter>,
  ) {}

  async getNovels() {
    return {}
  }
}
