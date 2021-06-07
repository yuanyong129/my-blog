import { ApiProperty } from '@nestjs/swagger'
import { modelOptions, mongoose, Prop } from '@typegoose/typegoose'

@modelOptions({
  schemaOptions: {
    timestamps: true, // 自动添加创建时间以及修改时间自动
  },
})
export class Role {
  _id?: string
  @ApiProperty({
    description: '角色名称',
    example: '管理员',
  })
  @Prop()
  name: string

  @ApiProperty({
    description: '角色描述',
    example: '超级管理员',
  })
  @Prop()
  description: string

  @ApiProperty({
    description: '权限菜单id',
  })
  @Prop({
    type: mongoose.Types.ObjectId,
  })
  menuId: string[]
}
