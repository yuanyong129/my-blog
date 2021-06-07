import { User } from '@libs/db/models/user.model'
import { Injectable } from '@nestjs/common'
import { ReturnModelType } from '@typegoose/typegoose/lib/types'
// import { Model } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}
  async getAllUsers(name: string, page: number, size: number) {
    if (!name) name = ''
    return await this.userModel
      .find({ username: new RegExp(`${name}`) }, { password: 0 })
      .skip((page - 1) * size)
      .limit(size)
  }

  async addUser(user: User) {
    const res = await this.userModel.findOne({ username: user.username })
    if (res === null) {
      await this.userModel.create(user)
      return 200
    } else {
      return 501
    }
  }

  async updUser(_id: string, user: User) {
    await this.userModel.updateOne({ _id }, user)
  }
  async updUserPass(_id: string, password: string) {
    await this.userModel.updateOne({ _id }, { password })
  }

  async delUser(_id: string) {
    await this.userModel.deleteOne({ _id })
  }
}
