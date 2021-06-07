import { ApiProperty } from '@nestjs/swagger'
import { modelOptions, prop, Ref } from '@typegoose/typegoose'

class Meta {
  @ApiProperty({ description: '菜单名称', example: '菜单管理' })
  @prop()
  title: string
  @ApiProperty({ description: '菜单图标', example: 'menu' })
  @prop()
  icon: string
}

@modelOptions({
  schemaOptions: {
    timestamps: true, // 自动添加创建时间以及修改时间自动
  },
})
export class Menu {
  _id?: string
  @ApiProperty({ description: '路径', example: '/index' })
  @prop()
  path: string

  @ApiProperty({ description: '名称', example: 'index' })
  @prop()
  name: string

  @ApiProperty({ description: '组件路径', example: '/home/index' })
  @prop()
  component: string

  @ApiProperty({ description: 'meta' })
  @prop({ _id: false })
  meta: Meta

  @ApiProperty({ description: '父id', example: '0' })
  @prop()
  pid?: string

  @ApiProperty({ description: '子菜单' })
  @prop({ ref: 'Menu' })
  children?: Ref<Menu>[]
}
