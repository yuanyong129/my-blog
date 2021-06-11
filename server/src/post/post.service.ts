import { Post } from '@libs/db/models/post.model'
import { Injectable } from '@nestjs/common'
import { ReturnModelType } from '@typegoose/typegoose'
import { InjectModel } from 'nestjs-typegoose'

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post) private readonly postModel: ReturnModelType<typeof Post>,
  ) {}

  // 查询所有帖子
  async getAllPosts(
    title = '',
    type = '',
    tag = '',
    page: number,
    size: number,
  ) {
    const findCondition = { title: new RegExp(`${title}`), type, tags: tag }
    if (!title) delete findCondition.title
    if (!type) delete findCondition.type
    if (!tag) delete findCondition.tags
    const list = await this.postModel
      .find(findCondition)
      .populate(['type', 'tags'])
      .skip((page - 1) * size)
      .limit(size)
      .sort({ createdAt: -1 })
    const total = await this.postModel.countDocuments({
      title: new RegExp(`${title}`),
    })
    const totalAll = await this.postModel.countDocuments()
    return { list, total, totalAll }
  }
  // 添加帖子
  async addPost(post: Post) {
    try {
      await this.postModel.create(post)
      return 200
    } catch (err) {
      console.log('添加帖子错误', err)
      return 501
    }
  }

  // 修改帖子
  async updPost(_id: string, post: Post) {
    await this.postModel.updateOne({ _id }, post)
  }

  // 删除帖子
  async delPost(_id: string) {
    await this.postModel.deleteOne({ _id })
  }

  // 根据id获取帖子
  async getPostById(_id: string) {
    return await this.postModel.findById(_id)
  }
}
