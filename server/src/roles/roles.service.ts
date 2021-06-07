import { Role } from '@libs/db/models/role.model'
import { Injectable } from '@nestjs/common'
import { ReturnModelType } from '@typegoose/typegoose'
import { InjectModel } from 'nestjs-typegoose'

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role) private readonly roleModel: ReturnModelType<typeof Role>,
  ) {}
  // 查询所有角色
  async getRoles() {
    return await this.roleModel.find()
  }
  // 添加角色
  async addRole(role: Role) {
    await this.roleModel.create(role)
  }
  // 修改角色
  async updRole(_id: string, role: Role) {
    await this.roleModel.updateOne({ _id }, role)
  }
  async delRole(_id: string) {
    await this.roleModel.deleteOne({ _id })
  }
}
