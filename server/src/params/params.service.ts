import { Param } from '@libs/db/models/param.model'
import { Injectable } from '@nestjs/common'
import { ReturnModelType } from '@typegoose/typegoose'
import { InjectModel } from 'nestjs-typegoose'

@Injectable()
export class ParamsService {
  constructor(
    @InjectModel(Param)
    private readonly paramModel: ReturnModelType<typeof Param>,
  ) {}

  // 查询所有参数
  async getAllParam(typeId: string, title: string, page: number, size: number) {
    if (!title) title = ''
    return await this.paramModel
      .find({ title: new RegExp(`${title}`), typeId })
      .skip((page - 1) * size)
      .limit(size)
      .sort({ createdAt: -1 })
  }
  // 添加参数
  async addParam(param: Param) {
    try {
      await this.paramModel.create(param)
      return 200
    } catch (err) {
      console.log('添加参数错误', err)
      return 501
    }
  }

  // 修改参数
  async updParam(_id: string, param: Param) {
    await this.paramModel.updateOne({ _id }, param)
  }

  // 删除参数
  async delParam(_id: string) {
    await this.paramModel.deleteOne({ _id })
  }
}
