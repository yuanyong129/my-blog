import { Type } from '@libs/db/models/type.model'
import { Injectable } from '@nestjs/common'
import { ReturnModelType } from '@typegoose/typegoose'
import { InjectModel } from 'nestjs-typegoose'

@Injectable()
export class TypesService {
  constructor(
    @InjectModel(Type) private readonly typeModel: ReturnModelType<typeof Type>,
  ) {}

  // 查询所有类型
  async getAllTypes(title: string, page: number, size: number) {
    if (!title) title = ''
    return await this.typeModel
      .find({ title: new RegExp(`${title}`) })
      .skip((page - 1) * size)
      .limit(size)
      .sort({ createdAt: -1 })
  }
  // 添加类型
  async addType(type: Type) {
    try {
      await this.typeModel.create(type)
      return 200
    } catch (err) {
      console.log('添加类型错误', err)
      return 501
    }
  }

  // 修改类型
  async updType(_id: string, type: Type) {
    await this.typeModel.updateOne({ _id }, type)
  }

  // 删除类型
  async delType(_id: string) {
    await this.typeModel.deleteOne({ _id })
  }
}
