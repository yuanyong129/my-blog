import { Menu } from '@libs/db/models/menu.model'
import { Injectable } from '@nestjs/common'
import { ReturnModelType } from '@typegoose/typegoose'
import { InjectModel } from 'nestjs-typegoose'

@Injectable()
export class MenusService {
  constructor(
    @InjectModel(Menu) private readonly menuModel: ReturnModelType<typeof Menu>,
  ) {}
  // 获取所有菜单
  async getMenu() {
    return await this.menuModel.find({ pid: '0' }).populate({
      path: 'children',
      populate: { path: 'children' }, //嵌套populate
    })
  }
  // 添加菜单
  async addMenu(menu: Menu) {
    const { _id } = await this.menuModel.create(menu)
    if (menu.pid !== '0') {
      const [parent] = await this.menuModel.find({ _id: menu.pid })
      parent.children.push(_id)
      await this.menuModel.updateOne({ _id: menu.pid }, parent)
    }
    return 200
  }
  // 修改菜单
  async updMenu(_id: string, menu: Menu) {
    const [{ pid }] = await this.menuModel.find({ _id }, { pid: 1 }) // 获取旧父id
    await this.menuModel.updateOne({ _id }, menu) // 更新菜单
    if (menu.pid !== pid && menu.pid !== '0') {
      // 如果父菜单发生改变
      const [oldParent] = await this.menuModel.find({ _id: pid }) // 找到旧父节点
      oldParent.children.filter((item) => {
        return item !== _id
      }) // 删除旧父节点的关联
      await this.menuModel.updateOne({ _id: pid }, oldParent) // 更新旧父节点
      const [parent] = await this.menuModel.find({ _id: menu.pid }) // 获取新父节点
      parent.children.push(_id) // 添加孩子
      await this.menuModel.updateOne({ _id: menu.pid }, parent) // 更新新父节点
    }
    return 200
  }
  // 删除菜单
  async delMenu(_id: string) {
    const { children } = await this.menuModel.findById(_id)
    if (children && children.length > 0) {
      return '存在子菜单无法删除'
    }
    await this.menuModel.deleteOne({ _id })
    return '删除成功'
  }
}
