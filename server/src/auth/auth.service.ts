import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
  createPremissonMenu(menuList, menuId: string[]) {
    return menuList.filter((menu) => {
      if (menu.children && menu.children.length > 0) {
        menu.children = this.createPremissonMenu(menu.children, menuId)
      }
      return menuId.includes(String(menu._id))
    })
  }
}
