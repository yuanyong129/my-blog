import { ApiProperty } from '@nestjs/swagger'
import { modelOptions, prop, Ref } from '@typegoose/typegoose'
import { Role } from './role.model'
import { hashSync } from 'bcryptjs'

@modelOptions({
  schemaOptions: {
    timestamps: true, // 自动添加创建时间以及修改时间自动
  },
})
export class User {
  _id?: string

  @ApiProperty({ description: '用户名', example: 'username' })
  @prop()
  username: string

  @ApiProperty({ description: '密码', example: 'password' })
  @prop({
    select: false,
    set(val) {
      return val && hashSync(val)
    },
    get(val) {
      return val
    },
  })
  password: string

  @ApiProperty({ description: '昵称', example: '昵称' })
  @prop()
  nickname: string

  @ApiProperty({ description: '真实姓名', example: '姓名' })
  @prop()
  name: string

  @ApiProperty({ description: '用户头像', example: '头像' })
  @prop()
  avatar?: string

  @ApiProperty({ description: '用户手机号', example: '15612345678' })
  @prop()
  phone: string

  @ApiProperty({
    description: '用户性别；0：保密，1：男，2：女',
    example: '0',
  })
  @prop()
  gender: number
  @ApiProperty({ description: '角色id', example: '' })
  @prop({
    ref: Role,
  })
  roleId: Ref<Role>
}
