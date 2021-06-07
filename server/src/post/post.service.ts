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
  async getAllPosts(title: string, page: number, size: number) {
    if (!title) title = ''
    return await this.postModel
      .find({ title: new RegExp(`${title}`) })
      .skip((page - 1) * size)
      .limit(size)
      .sort({ createdAt: -1 })
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
}
